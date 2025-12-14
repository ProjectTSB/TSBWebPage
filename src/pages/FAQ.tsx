import Header from "@/components/header"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqData } from "@/data/faq"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-8 w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">よくある質問</h1>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium [&>svg]:ml-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-900">
                {Array.isArray(faq.answer) ? (
                  faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className={pIndex > 0 ? "mt-2" : ""}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{faq.answer}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>

      <Footer />
    </div>
  )
}
