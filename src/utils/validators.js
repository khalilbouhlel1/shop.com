export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
};

export const validatePhone = (phone) => {
  const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return re.test(phone);
};

export const validateProductData = (product) => {
  const errors = {};

  if (!product.name?.trim()) {
    errors.name = 'Product name is required';
  }

  if (!product.price || product.price <= 0) {
    errors.price = 'Valid price is required';
  }

  if (!product.description?.trim()) {
    errors.description = 'Product description is required';
  }

  if (!product.sizes || product.sizes.length === 0) {
    errors.sizes = 'At least one size is required';
  }

  if (!product.images || product.images.length === 0) {
    errors.images = 'At least one image is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 