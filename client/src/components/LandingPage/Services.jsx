import { UserGroupIcon, BookOpenIcon, DocumentArrowDownIcon, NewspaperIcon, } from '@heroicons/react/24/outline'
const features = [
  {
    name: 'LegalSage',
    description:
      'LegalSage is our own Chatbot powered with OpenAI to answer your legal queries in simple language and laymen text',
    icon: BookOpenIcon ,
  },
  {
    name: 'Document Generation',
    description:
      'We also provide you the options to fill forms and generate them such as Criminal-Case Filing with District Court',
    icon: DocumentArrowDownIcon,
  },
  {
    name: 'Get Legal Advice',
    description:
      'Our team of lawyers are available 24/7 to provide you Legal advice from the comfort of your home',
    icon: UserGroupIcon,
  },
  {
    name: 'News Updates',
    description:
      'Get daily news updates on the law changes, new bills as well as new judgements.',
    icon: NewspaperIcon,
  },
]

export default function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" text-[27px] text-base font-semibold leading-7 text-violet-600">OUR SERVICES</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What do we actually do?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           As a Legalfirm, we specialize in various types of services to serve the public and give Legal Empowerment
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


