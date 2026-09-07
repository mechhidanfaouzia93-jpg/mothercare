
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-12">
      <div className="mx-auto max-w-4xl">

        {/* En-tête */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-pink-500">
            🌸 À propos de MotherCare
          </h1>

          <p className="text-lg leading-8 text-gray-600">
            Un accompagnement bienveillant pour vivre votre grossesse
            semaine après semaine.
          </p>
        </div>

        {/* Introduction */}
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-pink-500">
            💕 Notre mission
          </h2>

          <p className="leading-8 text-gray-700">
            MotherCare est une application dédiée à l'accompagnement des
            futures mamans tout au long de leur grossesse. Notre objectif est
            de vous aider à mieux comprendre les changements de votre corps et
            à suivre le développement de votre bébé, semaine après semaine.
          </p>

          <p className="mt-4 leading-8 text-gray-700">
            La grossesse est une période unique, remplie de découvertes,
            d'émotions et parfois de questions. MotherCare souhaite vous offrir
            un espace simple, rassurant et accessible pour vous accompagner à
            chaque étape de cette belle aventure.
          </p>
        </div>

        {/* Ce que propose MotherCare */}
        <div className="mt-6 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold text-pink-500">
            🌷 Ce que vous trouverez sur MotherCare
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-pink-50 p-5">
              <h3 className="font-semibold text-gray-800">
                👶 Suivi semaine par semaine
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Découvrez l'évolution et le développement de votre bébé tout
                au long de votre grossesse.
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-5">
              <h3 className="font-semibold text-gray-800">
                🤰 Changements de votre corps
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Comprenez les différents changements physiques et émotionnels
                que vous pouvez ressentir pendant votre grossesse.
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-5">
              <h3 className="font-semibold text-gray-800">
                💡 Conseils et bien-être
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Retrouvez des conseils pratiques pour prendre soin de vous et
                vivre votre grossesse plus sereinement.
              </p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-5">
              <h3 className="font-semibold text-gray-800">
                ❤️ Un accompagnement bienveillant
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                MotherCare vous accompagne avec une approche positive,
                rassurante et centrée sur votre bien-être.
              </p>
            </div>

          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mt-6 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-pink-500">
            🌼 Nos valeurs
          </h2>

          <ul className="space-y-3 leading-7 text-gray-700">
            <li>
              💗 <strong>Bienveillance :</strong> accompagner chaque future
              maman avec respect et douceur.
            </li>

            <li>
              🌱 <strong>Prévention :</strong> encourager de bonnes habitudes
              pour prendre soin de soi pendant la grossesse.
            </li>

            <li>
              📚 <strong>Information :</strong> proposer des contenus simples
              et faciles à comprendre.
            </li>

            <li>
              🤝 <strong>Accompagnement :</strong> vous aider à vous sentir
              soutenue tout au long de votre parcours.
            </li>
          </ul>
        </div>

        {/* Message important */}
        <div className="mt-6 rounded-3xl border border-pink-100 bg-pink-50 p-8">
          <h2 className="mb-3 text-xl font-semibold text-pink-600">
            🩺 Une information, pas un remplacement du suivi médical
          </h2>

          <p className="leading-7 text-gray-700">
            Les informations proposées par MotherCare ont pour objectif
            d'informer et d'accompagner les futures mamans. Elles ne remplacent
            pas les conseils, le diagnostic ou le suivi d'un médecin, d'une
            sage-femme ou d'un autre professionnel de santé.
          </p>

          <p className="mt-3 leading-7 text-gray-700">
            En cas de douleur, de symptômes inhabituels ou d'inquiétude,
            contactez toujours un professionnel de santé.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-pink-500">
            🌸 MotherCare — À vos côtés à chaque étape de votre grossesse ❤️
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;