'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

export default function Contact() {
  const { lang } = useLanguage()
  const tr = (en: string, mr: string) => (lang === 'mr' ? mr : en)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              {tr('Get in Touch', 'संपर्क साधा')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              {tr('Have questions about our seeds? Want to become a partner? We are here to help.', 'आमच्या बियाण्यांबद्दल प्रश्न आहेत? भागीदार व्हायचे आहे? आम्ही मदतीसाठी येथे आहोत.')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">{tr('Contact Information', 'संपर्क माहिती')}</h2>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{tr('Phone', 'फोन')}</h3>
                    <p className="text-muted-foreground">+91 77983 30904</p>
                    <p className="text-muted-foreground">{tr('Mon - Fri, 9AM - 6PM', 'सोम - शुक्र, सकाळी 9 ते संध्याकाळी 6')}</p>
                  </div>
                </div>

                {/* Email */}
                {/* <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{tr('Email', 'ईमेल')}</h3>
                    <p className="text-muted-foreground">info@shahuseed.com</p>
                    <p className="text-muted-foreground">support@shahuseed.com</p>
                  </div>
                </div> */}

                {/* Address */}
                {/* <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{tr('Address', 'पत्ता')}</h3>
                    <p className="text-muted-foreground">{tr('123 Agricultural Plaza', '123 अॅग्रीकल्चरल प्लाझा')}</p>
                    <p className="text-muted-foreground">{tr('Farm Valley, FV 12345', 'फार्म व्हॅली, FV 12345')}</p>
                  </div>
                </div> */}
              </div>

              {/* Quick Response Info */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">{tr('Quick Response', 'त्वरित प्रतिसाद')}</h3>
                <p className="text-sm text-muted-foreground">
                  {tr('We typically respond to inquiries within 24 hours during business days.', 'कामकाजाच्या दिवसांमध्ये आम्ही साधारणपणे 24 तासांत प्रतिसाद देतो.')}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-border rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-6">{tr('Send us a Message', 'आम्हाला संदेश पाठवा')}</h2>

                {submitted ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">✓</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{tr('Thank you!', 'धन्यवाद!')}</h3>
                    <p className="text-foreground">{tr("Your message has been received. We'll get back to you soon.", 'तुमचा संदेश प्राप्त झाला आहे. आम्ही लवकरच तुमच्याशी संपर्क करू.')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                          {tr('Full Name', 'पूर्ण नाव')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={tr('Your name', 'तुमचे नाव')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                          {tr('Email', 'ईमेल')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={tr('your@email.com', 'your@email.com')}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                          {tr('Phone Number', 'फोन नंबर')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder={tr('+91 XXXXX XXXXX', '+1 (555) 000-0000')}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                          {tr('Subject', 'विषय')}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">{tr('Select a subject', 'विषय निवडा')}</option>
                          <option value="inquiry">{tr('General Inquiry', 'सामान्य चौकशी')}</option>
                          <option value="partnership">{tr('Partnership Opportunity', 'भागीदारीची संधी')}</option>
                          <option value="support">{tr('Customer Support', 'ग्राहक सहाय्य')}</option>
                          <option value="feedback">{tr('Feedback', 'अभिप्राय')}</option>
                          <option value="other">{tr('Other', 'इतर')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        {tr('Message', 'संदेश')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder={tr('Tell us more about your inquiry...', 'तुमच्या चौकशीबद्दल अधिक माहिती द्या...')}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      {tr('Send Message', 'संदेश पाठवा')}
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{tr('Frequently Asked Questions', 'नेहमी विचारले जाणारे प्रश्न')}</h2>
            <p className="text-lg text-muted-foreground">{tr('Quick answers to common questions', 'सामान्य प्रश्नांची झटपट उत्तरे')}</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: tr('What is the germination rate of your seeds?', 'तुमच्या बियाण्यांचा उगवण दर किती आहे?'),
                a: tr('Our seeds typically have germination rates of 90%+ as verified through rigorous testing protocols.', 'कठोर चाचणी प्रक्रियेनुसार आमच्या बियाण्यांचा उगवण दर साधारणपणे 90% पेक्षा जास्त असतो.'),
              },
              {
                q: tr('Do you offer bulk orders?', 'तुम्ही मोठ्या प्रमाणात ऑर्डर स्वीकारता का?'),
                a: tr('Yes! We offer competitive bulk pricing for large orders. Contact our sales team for customized quotes.', 'होय. मोठ्या ऑर्डरसाठी आम्ही स्पर्धात्मक दर देतो. खास कोटेशनसाठी आमच्या विक्री टीमशी संपर्क साधा.'),
              },
              {
                q: tr('What regions do you service?', 'तुमची सेवा कोणत्या भागांमध्ये उपलब्ध आहे?'),
                a: tr('We distribute across 100+ areas nationwide with robust logistics support for reliable delivery.', 'आम्ही देशभरातील 100+ भागांमध्ये मजबूत लॉजिस्टिक सहाय्यासह वितरण करतो.'),
              },
              {
                q: tr('Do you provide technical support?', 'तुम्ही तांत्रिक सहाय्य देता का?'),
                a: tr('Absolutely. Our expert team is available to provide farming guidance, technical support, and cultivation tips.', 'नक्कीच. आमची तज्ञ टीम शेती मार्गदर्शन, तांत्रिक सहाय्य आणि लागवड टिप्ससाठी उपलब्ध आहे.'),
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">{tr('Ready to Transform Your Harvest?', 'तुमचे उत्पादन बदलण्यासाठी तयार आहात का?')}</h2>
          <p className="text-lg opacity-90 mb-8">
            {tr('Connect with our team to learn how SHAHU SEEDS can help you achieve exceptional results.', 'SHAHU SEEDS तुमच्या उत्कृष्ट परिणामांसाठी कशी मदत करू शकते हे जाणून घेण्यासाठी आमच्या टीमशी संपर्क साधा.')}
          </p>
        </div>
      </section>
    </div>
  )
}
