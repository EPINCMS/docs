import type { Route } from "./+types/home";
import { Link } from "react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EPINCMS — E-Ticaret Altyapısı" },
    {
      name: "description",
      content:
        "Güçlü, esnek ve ölçeklenebilir e-ticaret altyapısı. EPINCMS ile işinizi büyütün.",
    },
  ];
}

const features = [
  {
    icon: "🛒",
    title: "Sepet & Hızlı Ödeme",
    description: "Gelişmiş sepet yönetimi ve tek tıkla hızlı ödeme akışı.",
  },
  {
    icon: "💳",
    title: "Çoklu Ödeme",
    description: "Farklı ödeme sağlayıcılarını tek platformda yönetin.",
  },
  {
    icon: "🌍",
    title: "Çoklu Para Birimi",
    description: "Global satış için otomatik döviz dönüşümü ve fiyatlandırma.",
  },
  {
    icon: "📦",
    title: "Ürün Yönetimi",
    description: "Sınırsız ürün, varyant ve kategori desteğiyle tam kontrol.",
  },
  {
    icon: "🎯",
    title: "Kampanya Modülü",
    description: "Kupon, indirim ve referral sistemiyle satışları artırın.",
  },
  {
    icon: "📊",
    title: "Analitik & Raporlama",
    description: "Detaylı satış raporları ve gerçek zamanlı analizler.",
  },
  {
    icon: "🔒",
    title: "Güvenlik & KYC",
    description: "Dolandırıcılık kontrolü ve kimlik doğrulama sistemi.",
  },
  {
    icon: "🏷️",
    title: "White Label",
    description: "Markanıza özel görünüm ve tam kişiselleştirme imkânı.",
  },
];

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-24 pb-20 text-center overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-fd-primary/10 blur-3xl" />
        </div>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          Sürekli Güncellenen Platform
        </div>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-fd-foreground">
          Modern E-Ticaret
          <br />
          <span className="text-fd-primary">Altyapısı</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-fd-muted-foreground sm:text-lg">
          EPINCMS ile ürün yönetiminden ödeme sistemlerine, kampanya modülünden
          analitiklere kadar ihtiyaç duyduğunuz her şey tek platformda.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-md transition hover:opacity-90 active:scale-95"
          >
            Dokümantasyona Başla
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="https://id.epincms.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground transition hover:bg-fd-accent active:scale-95"
          >
            Müşteri Paneli
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-fd-foreground sm:text-3xl">
            Platformun Öne Çıkan Özellikleri
          </h2>
          <p className="mt-3 text-sm text-fd-muted-foreground">
            İşletmenizi büyütmek için ihtiyaç duyduğunuz araçlar hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-fd-border bg-fd-card p-5 transition hover:border-fd-primary/50 hover:bg-fd-accent/30"
            >
              <div className="mb-3 text-2xl">{f.icon}</div>
              <h3 className="mb-1 text-sm font-semibold text-fd-foreground">
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed text-fd-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-4 pb-24 text-center">
        <div className="rounded-2xl border border-fd-border bg-fd-card px-8 py-12">
          <h2 className="text-2xl font-bold text-fd-foreground">
            Hemen Başlayın
          </h2>
          <p className="mt-3 text-sm text-fd-muted-foreground">
            Kurulum adımları, özellik rehberleri ve teknik dokümantasyona göz
            atın.
          </p>
          <Link
            to="/docs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-fd-primary px-7 py-3 text-sm font-semibold text-fd-primary-foreground shadow transition hover:opacity-90 active:scale-95"
          >
            Dokümantasyonu Aç
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </HomeLayout>
  );
}
