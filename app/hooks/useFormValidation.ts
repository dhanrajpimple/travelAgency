import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: string) => string | null;
}

interface FormField {
  value: string;
  error: string;
  rules: ValidationRules;
}

export function useFormValidation(initialFields: Record<string, FormField>) {
  const [fields, setFields] = useState(initialFields);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    const field = fields[name];
    if (!field) return '';

    const { rules } = field;

    if (rules.required && !value.trim()) {
      return 'This field is required';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum ${rules.minLength} characters required`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum ${rules.maxLength} characters allowed`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Invalid format';
    }

    if (rules.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (rules.phone) {
      const phonePattern = /^[\d\s\-\+\(\)]+$/;
      if (!phonePattern.test(value) || value.replace(/\D/g, '').length < 10) {
        return 'Please enter a valid phone number';
      }
    }

    if (rules.custom) {
      const customError = rules.custom(value);
      if (customError) return customError;
    }

    return '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error,
      },
    }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFields((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error,
      },
    }));
  };

  const validateForm = (): boolean => {
    const newFields = { ...fields };
    let isValid = true;

    Object.keys(newFields).forEach((name) => {
      const error = validateField(name, newFields[name].value);
      if (error) {
        isValid = false;
        newFields[name] = { ...newFields[name], error };
      }
    });

    setFields(newFields);
    return isValid;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    onSubmit: (values: Record<string, string>) => Promise<void> | void
  ) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const values = Object.keys(fields).reduce((acc, key) => {
        acc[key] = fields[key].value;
        return acc;
      }, {} as Record<string, string>);
      
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    const resetFields = { ...fields };
    Object.keys(resetFields).forEach((name) => {
      resetFields[name] = {
        ...resetFields[name],
        value: '',
        error: '',
      };
    });
    setFields(resetFields);
  };

  return {
    fields,
    handleChange,
    handleBlur,
    handleSubmit,
    validateForm,
    resetForm,
    isSubmitting,
  };
}

