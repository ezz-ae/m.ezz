// src/app/thesis/page.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { SiteHeader } from '@/components/SiteHeader';
import FooterMinimal from '@/components/FooterMinimal';

// A bespoke Stanza component for this page's unique animation
const Stanza = ({ children, className = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: 'blur(4px)', y: 20 }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`text-xl md:text-2xl leading-relaxed text-[#3a3a3a] mb-12 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const ChapterTitle = ({ children }) => {
     const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    return (
        <motion.h2 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-3xl md:text-4xl text-[#a0522d] mb-10 mt-24 border-b border-[#a0522d]/20 pb-4"
        >
            {children}
        </motion.h2>
    );
}

export default function ThesisPage() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-[#F5F5DC] text-[#3a3a3a] overflow-x-hidden pt-32 font-pt-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-right" dir="rtl">
              
              <motion.div 
                className="text-center mb-24"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                  <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#2a2a2a]">الإنسان والذاكرة والذكاء الاجتماعي</h1>
                  <p className="text-base text-[#a0522d]/80 mt-4">صياغة تأسيسية – نسخة علمية فلسفية</p>
              </motion.div>

              <Stanza>
                  لقد تجاوز الإنسان الفكرة التقليدية في تعريف الذكاء، وتجاوز حدود المعنى نفسه. فالعقل البشري لا يعمل كما تخيّلته العلوم القديمة؛ هو ليس وعاءً محدودًا ولا نظامًا منتهياً، بل هو آلية توليد مستمر، لا تعرف الثبات ولا تتعامل مع الماضي كما نتوهم.
              </Stanza>
               <Stanza>
                  نحن لم نسأل السؤال الصحيح عبر التاريخ، ليس لأننا أغبياء، بل لأننا مشغولون بما يشبه “فطرة البقاء” فينا. كلنا نريد أن نستمر… وقبل أن نفهم الذكاء، كنا نحاول فقط أن نعيش.
              </Stanza>
              <Stanza>
                  لكن الآن… لأول مرة، يمكن للإنسان أن ينظر إلى عقله بدون خوف، أن يدرس “النسيان” ليس كعجز، بل كالقانون الذي يحكم العقل، وأن يعيد تعريف الذكاء الاجتماعي ليس كمهارة، بل كنظام تواصل مبني على المعنى لا الذاكرة.
              </Stanza>
              
              <ChapterTitle>الفصل الأول: العقل كمحرّك للمعنى</ChapterTitle>
              <Stanza>
                  العقل لا يملك خزائن. لا يملك أرففًا. لا يملك أرشيفًا. العقل لا يتذكر… العقل يولّد. انت لا ترى الماضي كما كان. أنت ترى الماضي كما أصبحت. إنها هندسة الدماغ البشري. عقولنا تنعم بما يمكن تسميته بالمحدودية النفعية.
              </Stanza>
               <Stanza>
                  الإنسان لا يحتاج الاحداث ليتعلم. الإنسان يحتاج المعنى فقط. العقل لا يحتفظ بما حدث… بل يحتفظ بما سيحتاج إليه لاحقًا.
              </Stanza>

              <ChapterTitle>الفصل الثاني: الذاكرة كنظام توليدي</ChapterTitle>
              <Stanza>
                  النسيان ليس فقدان بل نضج، ليس محوًا… بل اندماج. العقل لا يمحو شيئًا… العقل لا يخزن أصلًا. ما يحدث هو أن تمر تجربة، يقرأ العقل درجة فائدتها، يتكوّن منها “مفهوم”، وليس “حدثًا”، ثم يتلاشى كل شيء آخر.
              </Stanza>

              <ChapterTitle>الفصل الثالث: الذكاء كعملية لا صفة</ChapterTitle>
              <Stanza>
                  الذكاء ليس صفة. الذكاء عملية. يُقاس بقدرتين: دقة الاستخلاص (كيف يستخلص عقلك المفهوم من الحدث) ودقة الربط (كيف يربط المفاهيم ببعضها). الذكاء ليس ملكية، بل حركة. ذبذبة. ثم فكرة.
              </Stanza>

                <ChapterTitle>الفصل الرابع: الإنسان ككائن احتمالي</ChapterTitle>
                <Stanza>
                    العقل لا يصنع نتيجة واحدة، بل عدة نتائج محتملة، ثم يختار أفضلها بسرعة تتجاوز أي آلة. كل فكرة هي ترجيح. كل قرار هو احتمالية. كل ذاكرة هي إعادة توليد وفق ما تظن أنه الأقرب.
                </Stanza>
                <Stanza>
                    وبهذا يصبح الإنسان كائنًا يعمل وفق معادلة واضحة: الماضي مادة خام، والحاضر ورشة بناء، والمستقبل احتمالية مفتوحة.
                </Stanza>

                <ChapterTitle>فصل: المحدودية النفعية</ChapterTitle>
                <Stanza>
                    أكبر خطأ ارتكبته العلوم القديمة أنها اعتبرت “نقص الذاكرة” خللًا. الحقيقة أن هذا النقص هو مركز التصميم. المحدودية ليست ضعفًا… المحدودية نظام فرز. هي ما يسمح للعقل أن يضحي بكل ما هو غير مفيد حتى يبقي “شبكة المعنى” نظيفة، خفيفة، وعملية.
                </Stanza>

                <ChapterTitle>فصل: كيف يتعامل الدماغ مع الفوضى؟</ChapterTitle>
                <Stanza>
                    الفوضى ليست عدو العقل… الفوضى هي الوقود. الفوضى تجبره أن يولّد. والتوليد يجبره أن يعيد ترتيب نفسه. كل لحظة فوضى هي لحظة ذكاء أعلى حتى لو شعرتَ وقتها أنك في أسوأ حالاتك.
                </Stanza>
                
                <ChapterTitle>فصل: الحدس والخيال</ChapterTitle>
                <Stanza>
                    الحدس ليس “شعورًا غامضًا”. الحدس هو النظام الموازي للعقل الواعي. إنه علم سريع. ذاكرة من نوع جديد: ذاكرة بلا أحداث.
                </Stanza>
                <Stanza>
                    الخيال ليس هروبًا من الواقع. الخيال هو آلة التجريب الذهني. الفضاء الذي يسمح للعقل بأن يتجاوز ذاته.
                </Stanza>

              <ChapterTitle>الخاتمة: الإنسان كنظام احتمالي متحرك</ChapterTitle>
              <Stanza>
                  الوعي البشري ليس تراكمًا… بل تدفّق. والذاكرة ليست تاريخًا… بل نظام تنبؤ ومعنى. والذكاء ليس مستوى… بل موجة تتحرك بقدر حاجتك إليها. الإنسان لا يعمل وفق نموذج “الآلة التي تقرأ الماضي”، بل وفق نموذج “الكائن الذي يكوّن معنى من العدم لحظة بلحظة”.
              </Stanza>
              <Stanza>
                  نحن لا نتذكر الحياة… نحن نعيد اختراعها في كل مرة نفكر فيها بها.
              </Stanza>
          </div>
        </div>
      </div>
      <FooterMinimal />
    </>
  );
}
