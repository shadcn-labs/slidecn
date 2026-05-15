import { CommandBox } from "@/components/command-box";
import { ComponentPreview } from "@/components/component-preview";
import { HomeCtas } from "@/components/home-ctas";
import { PageTransition } from "@/components/page-transition";
import { ROUTES } from "@/constants/routes";
import { BreadcrumbJsonLd } from "@/seo/json-ld";

export const dynamic = "force-static";
export const revalidate = false;

const showcaseItems = [
  {
    className: "md:col-span-2",
    name: "title-slide-demo",
  },
  {
    className: "md:col-span-2",
    name: "section-slide-demo",
  },
  {
    className: "md:col-span-2",
    name: "content-slide-demo",
  },
  {
    className: "md:col-span-2",
    name: "split-slide-demo",
  },
];

export default function IndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: ROUTES.HOME }]} />
      <PageTransition>
        <section className="relative overflow-hidden">
          <div className="container-wrapper relative">
            <div className="container flex flex-col items-center gap-4 py-16 text-center md:py-20 lg:py-24">
              <h1 className="max-w-7xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/tight from-foreground via-foreground to-foreground/65 bg-linear-to-b bg-clip-text text-transparent">
                Beautiful presentations, made simple
              </h1>

              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Ready to use, customizable presentation components for React.
                <br className="hidden sm:block" />
                Built on reveal.js. Distributed via shadcn.
              </p>

              <CommandBox className="mt-4 w-full max-w-xl" />

              <HomeCtas className="mt-4" />
            </div>
          </div>
        </section>

        <section className="container-wrapper pb-8 lg:pb-12">
          <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {showcaseItems.map((item) => (
              <ComponentPreview
                key={item.name}
                hideCode
                name={item.name}
                className={item.className}
              />
            ))}
          </div>
        </section>
      </PageTransition>
    </>
  );
}
