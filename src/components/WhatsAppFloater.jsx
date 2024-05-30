import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloater = () => {
    const phoneNumber = "27763863550"; // International format without the plus sign

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-green-600 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp className="text-2xl md:text-3xl" />
        </a>
    );
};

export default WhatsAppFloater;
