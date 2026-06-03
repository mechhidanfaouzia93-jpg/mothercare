
export const NotFound = () => {
  return (
<section className="flex flex-col items-center gap-6  py-4 px-12 ">
    <h1 className="text-9xl text-primary-300">404</h1>

    <h2 className="text-lg text-primary-600">La ressource que vous recherchez n'existe pas.</h2>

    <img className="h-72" src="/icons/error404.jpg" alt="Erreur 404" />
</section>
  )
}