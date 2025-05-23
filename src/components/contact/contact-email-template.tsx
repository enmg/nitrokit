import { ContactFormEmailTemplateProps } from '@/types/ContactFormEmailTemplateProps';

export const ContactFormEmailTemplate: React.FC<Readonly<ContactFormEmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div>
        <h1>Website: Contact Form Submission</h1>
        <p>New contact from submission with the following details: </p>
        <p>
            From: <strong>{name}</strong>, Email: {email}
        </p>

        <h2>Message:</h2>
        <p>{message}</p>
    </div>
);
