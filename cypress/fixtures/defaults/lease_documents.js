const defaultLeaseDocument = () => {
  return {
    updated_at: new Date(),
    created_at: new Date(),
  };
};

module.exports = {
  defaultLeaseDocument,
};
