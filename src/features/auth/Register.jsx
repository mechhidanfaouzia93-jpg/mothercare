import { RegisterForm } from "./RegisterForm"



export const Register = () => {
    return (
        <>
        <section className="text-center mt-12 text-primary-700 font-bold">
            <h1 className="text-4xl">Créer un compte</h1>
        </section>
        <section>
            <RegisterForm />
        </section>
        </>
    )
}