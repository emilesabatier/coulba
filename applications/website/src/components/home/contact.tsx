import { ContactForm } from "./contactForm"


export function Contact() {
    return (
        <div id="contact" className="w-full max-w-full h-full flex flex-col justify-start items-center gap-8 py-16">
            <div className="flex flex-col justify-start items-center gap-2 max-w-[768px]">
                <h2 className="text-3xl leading-none uppercase text-center">Nous contacter</h2>
                <p className="text-lg text-neutral/75 text-balance text-center">Si vous avez besoin spécifique ou besoin de plus d'informations, n'hésitez pas à nous en parler en utilisant le formulaire ci-dessous.</p>
            </div>
            <ContactForm />
        </div>
    )
}
