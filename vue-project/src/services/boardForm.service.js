
export const boardFormService = {
  validateName(name) {
    if (!name) {
      return "Name is required";
    }
    if (name.length > 64) {
      return "Name is too long";
    }
    return false;
  },
  validateDescription(description) {
    if (!description) {
      return "Description is required";
    }
    if (description.length > 128) {
      return "Description is too long";
    }
    return false;
  },
};
