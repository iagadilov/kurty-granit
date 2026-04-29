import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactForm from '@/components/ui/ContactForm';
import { company } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Контакты завода по обработке камня «Курты». Офисы в Казахстане и России. Телефоны, email, адреса.',
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-stone-950 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Контакты' }]} />

        <div className="mt-8 mb-12">
          <SectionTitle title="Контакты" />
        </div>

        {/* Office cards */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Kazakhstan */}
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-0.5 w-6 bg-accent" />
                <h3 className="font-semibold text-stone-50">Казахстан (головной офис)</h3>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Организация</dt>
                  <dd className="mt-0.5 text-stone-400">{company.fullName}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Адрес</dt>
                  <dd className="mt-0.5 text-stone-400">
                    040613, Республика Казахстан, {company.address.kz}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Телефон</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="text-accent transition-colors hover:text-accent-dark"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Email</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`mailto:${company.email}`}
                      className="text-accent transition-colors hover:text-accent-dark"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Самовывоз</dt>
                  <dd className="mt-0.5 text-stone-400">{company.address.factory}</dd>
                </div>
              </dl>
            </div>

            {/* Russia */}
            <div className="rounded-lg bg-stone-900 border border-stone-800 p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-0.5 w-6 bg-accent" />
                <h3 className="font-semibold text-stone-50">Россия (представительство)</h3>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Организация</dt>
                  <dd className="mt-0.5 text-stone-400">{company.fullName}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Адрес</dt>
                  <dd className="mt-0.5 text-stone-400">{company.address.ru}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Телефон</dt>
                  <dd className="mt-0.5">
                    <a
                      href="tel:+77710111118"
                      className="text-accent transition-colors hover:text-accent-dark"
                    >
                      +7 (771) 011-11-18
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-stone-500">Email</dt>
                  <dd className="mt-0.5">
                    <a
                      href="mailto:info@kurty.ru"
                      className="text-accent transition-colors hover:text-accent-dark"
                    >
                      info@kurty.ru
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="form" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-stone-50">Отправить заявку</h2>
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </section>

        {/* Map */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-stone-50">На карте</h2>
          <div className="overflow-hidden rounded-lg border border-stone-800">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=76.849600%2C43.238949&z=12"
              width="100%"
              height="400"
              frameBorder="0"
              title="Карта"
              className="block"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
