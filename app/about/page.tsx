'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles, Leaf, Award, Users } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

export default function About() {
  const { lang } = useLanguage()
  const tr = (en: string, mr: string) => (lang === 'mr' ? mr : en)

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.12),_transparent_45%),linear-gradient(to_bottom_right,hsl(var(--background)),white,hsl(var(--background)))]">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              {tr('Since 2020', '2020 पासून')}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              {tr('About SHAHU SEEDS', 'SHAHU SEEDS विषयी')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              {tr(
                'Pioneering agricultural excellence through innovation, quality, and unwavering commitment to our farming community.',
                'नवकल्पना, गुणवत्ता आणि शेतकरी समुदायाप्रती अढळ बांधिलकीद्वारे कृषी उत्कृष्टतेचा नवा मानदंड निर्माण करत आहोत.',
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20 h-96 flex items-center justify-center shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">2+</div>
                  <p className="text-xl font-semibold text-foreground">{tr('Years of Excellence', 'उत्कृष्टतेची वर्षे')}</p>
                  <p className="text-muted-foreground">{tr('Serving the agricultural community', 'कृषी समुदायाच्या सेवेत')}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">{tr('Our Journey', 'आमचा प्रवास')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {tr(
                  'Founded with a vision to transform agriculture through superior seed technology, SHAHU SEEDS has established itself as a trusted partner for farmers nationwide.',
                  'उत्तम बियाणे तंत्रज्ञानाद्वारे शेतीत बदल घडवण्याच्या ध्येयाने स्थापन झालेल्या SHAHU SEEDS ने देशभरातील शेतकऱ्यांचा विश्वासू भागीदार म्हणून स्वतःची ओळख निर्माण केली आहे.',
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {tr(
                  'What started as a small operation has grown into a network serving 10,000+ farmers across 20+ distribution areas.',
                  'लहान उपक्रमापासून सुरुवात होऊन आज 20+ वितरण क्षेत्रांतील 10,000+ शेतकऱ्यांना सेवा देणारे जाळे आम्ही उभे केले आहे.',
                )}
              </p>
              <div className="space-y-3">
                {[
                  tr('Consistent focus on seed quality and germination rates', 'बियाण्यांची गुणवत्ता आणि उगवण दरावर सातत्यपूर्ण लक्ष'),
                  tr('Advanced research and development programs', 'प्रगत संशोधन आणि विकास कार्यक्रम'),
                  tr('Sustainable farming practices and environmental stewardship', 'शाश्वत शेती पद्धती आणि पर्यावरणपूरक दृष्टीकोन'),
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">{tr('Our Mission', 'आमचे ध्येय')}</h2>
            <p className="text-lg leading-relaxed opacity-90">
              {tr(
                'To provide premium, research-backed onion seeds that empower farmers with exceptional yields, reliability, and profitability.',
                'शेतकऱ्यांना उच्च उत्पन्न, विश्वासार्हता आणि नफा देणारी संशोधनाधारित प्रीमियम कांदा बियाणे उपलब्ध करून देणे.',
              )}
            </p>
            <div className="border-l-4 border-secondary pl-6">
              <p className="font-semibold text-secondary">{tr('Excellence in Every Seed', 'प्रत्येक बियाण्यात उत्कृष्टता')}</p>
              <p className="opacity-75">{tr('Our promise to every farmer we serve', 'आम्ही सेवा देत असलेल्या प्रत्येक शेतकऱ्याला दिलेला शब्द')}</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">{tr('Our Vision', 'आमची दृष्टी')}</h2>
            <p className="text-lg leading-relaxed opacity-90">
              {tr(
                'To become the most trusted and innovative onion seed provider globally, recognized for transforming agricultural practices.',
                'कृषी पद्धतींमध्ये परिवर्तन घडवणारा जागतिक स्तरावर सर्वात विश्वासार्ह आणि नाविन्यपूर्ण कांदा बियाणे पुरवठादार बनणे.',
              )}
            </p>
            <div className="border-l-4 border-secondary pl-6">
              <p className="font-semibold text-secondary">{tr('Redefining Agriculture', 'शेतीला नवी दिशा')}</p>
              <p className="opacity-75">{tr('Building a sustainable future for farming', 'शेतीसाठी शाश्वत भविष्य घडवत आहोत')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{tr('Our Core Values', 'आमची मूलभूत मूल्ये')}</h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-5 w-5" />,
                title: tr('Quality First', 'गुणवत्ता प्रथम'),
                description: tr('Every seed undergoes rigorous testing to ensure excellence.', 'उत्कृष्टता सुनिश्चित करण्यासाठी प्रत्येक बियाण्याची कठोर चाचणी केली जाते.'),
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: tr('Innovation', 'नवकल्पना'),
                description: tr('Continuous research and development for better results.', 'उत्तम परिणामांसाठी सातत्यपूर्ण संशोधन आणि विकास.'),
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: tr('Integrity', 'प्रामाणिकपणा'),
                description: tr('Transparent practices and honest dealings with all partners.', 'सर्व भागीदारांसोबत पारदर्शक पद्धती आणि प्रामाणिक व्यवहार.'),
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: tr('Sustainability', 'शाश्वतता'),
                description: tr('Environmentally responsible agriculture for future generations.', 'भावी पिढ्यांसाठी पर्यावरणपूरक आणि जबाबदार शेती.'),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
              >
                <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section (Only Founder) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{tr('Founder', 'संस्थापक')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {tr('The driving force behind SHAHU SEEDS and its farmer-first vision.', 'SHAHU SEEDS आणि त्याच्या शेतकरी-प्रथम दृष्टीमागील प्रेरणाशक्ती.')}
            </p>
          </div>

          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-background via-white to-primary/5 p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-center">
              <div className="mx-auto md:mx-0">
                <div className="h-52 w-52 rounded-2xl bg-gradient-to-br from-primary/25 to-secondary/25 border border-primary/20 flex items-center justify-center">
                  <span className="text-7xl font-bold text-primary/70">R</span>
                </div>
              </div>

              <div className="space-y-4">
                <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
                  {tr('Founder & CEO', 'संस्थापक आणि CEO')}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Himanshu Patil</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {tr(
                    'With a deep commitment to agricultural innovation, Himanshu Patil founded SHAHU SEEDS to deliver dependable, high-performance onion seeds and long-term value to farmers.',
                    'कृषी नवकल्पनांप्रती दृढ बांधिलकी ठेवून हिमांशू पाटील यांनी SHAHU SEEDS ची स्थापना केली, जेणेकरून शेतकऱ्यांना विश्वासार्ह, उच्च-कार्यक्षम कांदा बियाणे आणि दीर्घकालीन मूल्य मिळावे.',
                  )}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {[
                    tr('Farmer-Centric Leadership', 'शेतकरी-केंद्रित नेतृत्व'),
                    tr('Seed Innovation', 'बियाणे नवकल्पना'),
                    tr('Sustainable Growth', 'शाश्वत वाढ'),
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground text-center"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{tr('Partner with Excellence', 'उत्कृष्टतेसोबत भागीदारी करा')}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {tr('Join our growing community of farmers achieving exceptional results with SHAHU SEEDS.', 'SHAHU SEEDS सोबत उत्कृष्ट परिणाम मिळवणाऱ्या वाढत्या शेतकरी समुदायात सामील व्हा.')}
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            {tr('Get in Touch', 'संपर्क साधा')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
