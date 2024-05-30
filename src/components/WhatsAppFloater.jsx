import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloater = () => {
    const phoneNumber = "27763863550"; // International format without the plus sign

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={32} />
        </a>
    );
};

export default WhatsAppFloater;
