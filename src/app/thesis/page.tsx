// src/app/thesis/page.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

// A bespoke Stanza component for this page's unique animation
const Stanza = ({ children, className = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, filter: 'blur(5px)', y: 25 }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className={`text-xl md:text-2xl leading-relaxed text-[#3a3a3a] mb-12 ${className}`}
        >
            {children}
        </motion.div>
    );
};

// A new component to highlight key concepts with a subtle, elegant animation
const Emphasized = ({ children }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.8 });

    return (
        <motion.span
            ref={ref}
            initial={{ color: '#3a3a3a' }}
            animate={isInView ? { color: '#a0522d' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-semibold"
        >
            {children}
        </motion.span>
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
            className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-10 mt-24 border-b border-[#a0522d]/20 pb-4"
        >
            {children}
        </motion.h2>
    );
}

export default function ThesisPage() {
  return (
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
                  لقد تجاوز الإنسان الفكرة التقليدية في تعريف الذكاء، وتجاوز حدود المعنى نفسه. فالعقل البشري لا يعمل كما تخيّلته العلوم القديمة؛ هو ليس وعاءً محدودًا ولا نظامًا منتهياً، بل هو <Emphasized>آلية توليد مستمر</Emphasized>، لا تعرف الثبات ولا تتعامل مع الماضي كما نتوهم.
              </Stanza>
              <Stanza>
                  نحن لم نسأل السؤال الصحيح عبر التاريخ، ليس لأننا أغبياء، بل لأننا مشغولون بما يشبه “فطرة البقاء” فينا. كلنا نريد أن نستمر… وقبل أن نفهم الذكاء، كنا نحاول فقط أن نعيش.
              </Stanza>
              <Stanza>
                  لكن الآن… لأول مرة، يمكن للإنسان أن ينظر إلى عقله بدون خوف، أن يدرس <Emphasized>“النسيان” ليس كعجز، بل كالقانون الذي يحكم العقل</Emphasized>، وأن يعيد تعريف الذكاء الاجتماعي ليس كمهارة، بل كنظام تواصل مبني على المعنى لا الذاكرة.
              </Stanza>
              
              <ChapterTitle>الفصل الأول: العقل كمحرّك للمعنى</ChapterTitle>
              <Stanza>
                  العقل لا يملك خزائن. لا يملك أرففًا. لا يملك أرشيفًا. <Emphasized>العقل لا يتذكر… العقل يولّد</Emphasized>. انت لا ترى الماضي كما كان. أنت ترى الماضي كما أصبحت. إنها هندسة الدماغ البشري. عقولنا تنعم بما يمكن تسميته <Emphasized>بالمحدودية النفعية</Emphasized>.
              </Stanza>
               <Stanza>
                  الإنسان لا يحتاج الاحداث ليتعلم. <Emphasized>الإنسان يحتاج المعنى فقط</Emphasized>. العقل لا يحتفظ بما حدث… بل يحتفظ بما سيحتاج إليه لاحقًا.
              </Stanza>

              <ChapterTitle>الفصل الثاني: الذاكرة كنظام توليدي</ChapterTitle>
              <Stanza>
                  <Emphasized>النسيان ليس فقدان بل نضج</Emphasized>، ليس محوًا… بل اندماج. العقل لا يمحو شيئًا… <Emphasized>العقل لا يخزن أصلًا</Emphasized>. ما يحدث هو أن تمر تجربة، يقرأ العقل درجة فائدتها، يتكوّن منها “مفهوم”، وليس “حدثًا”، ثم يتلاشى كل شيء آخر.
              </Stanza>

              <ChapterTitle>الفصل الثالث: الذكاء كعملية لا صفة</ChapterTitle>
              <Stanza>
                  الذكاء ليس صفة. <Emphasized>الذكاء عملية</Emphasized>. يُقاس بقدرتين: <Emphasized>دقة الاستخلاص</Emphasized> (كيف يستخلص عقلك المفهوم من الحدث) و<Emphasized>دقة الربط</Emphasized> (كيف يربط المفاهيم ببعضها). الذكاء ليس ملكية، بل حركة. ذبذبة. ثم فكرة.
              </Stanza>

                <ChapterTitle>الفصل الرابع: الإنسان ككائن احتمالي</ChapterTitle>
                <Stanza>
                    العقل لا يصنع نتيجة واحدة، بل عدة نتائج محتملة، ثم يختار أفضلها بسرعة تتجاوز أي آلة. <Emphasized>كل فكرة هي ترجيح. كل قرار هو احتمالية</Emphasized>. كل ذاكرة هي إعادة توليد وفق ما تظن أنه الأقرب.
                </Stanza>
                <Stanza>
                    وبهذا يصبح الإنسان كائنًا يعمل وفق معادلة واضحة: <Emphasized>الماضي مادة خام، والحاضر ورشة بناء، والمستقبل احتمالية مفتوحة</Emphasized>.
                </Stanza>
                
              <ChapterTitle>الخاتمة: الإنسان والذاكرة التوليدية</ChapterTitle>
              <Stanza>
                  الإنسان لا يملك ذاكرة بمعنى ملفات التخزين، فالنسيان ليس فقدانًا بل عملية تذكر تولّد المعنى. عقولنا تولد اللحظة ولا تعرف الماضي كما نتوهم، بل تبني الغد وفق الخبرة والسياق الحالي. الوعي البشري ليس تراكمًا، بل تدفّق مستمر؛ والذكاء ليس صفة ثابتة، بل موجة تتحرك بقدرتنا على الربط والاستخلاص. نحن لا نتذكر الحياة… نحن نخلقها من جديد في كل لحظة نفكر فيها بها.
              </Stanza>

              <div className="text-center text-sm text-neutral-500 mt-20 pb-20">
                <p>⸻</p>
                <p>مختارات من بحث علمي متقدم: الذاكرة التوليدية ودور النسيان في الذاكرة البشرية</p>
              </div>
          </div>
        </div>
      </div>
  );
}
