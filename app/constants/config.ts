const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const options = {
    publicKey: import.meta.env.VITE_PUBLIC_KEY,
};

export { serviceId, templateId, options };
