// src/app/thesis/page.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/ScrollTypography';

const Stanza = ({ children, className = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.1 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className={`text-xl md:text-2xl leading-relaxed text-neutral-300 mb-12 font-headline ${className}`}
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
            className="text-3xl md:text-4xl font-light text-orange-400/80 mb-8 mt-20"
        >
            {children}
        </motion.h2>
    );
}

export default function ThesisPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 overflow-x-hidden pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-right" dir="rtl">
            
            <Section className="text-center mb-24">
                <h1 className="text-4xl md:text-5xl font-light text-neutral-100">الإنسان والذاكرة والذكاء الاجتماعي</h1>
                <p className="text-base text-neutral-500 mt-4">صياغة تأسيسية – نسخة علمية فلسفية</p>
            </Section>

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
            
            <ChapterTitle>الخاتمة: الإنسان كمنظومة متغيرة</ChapterTitle>
            <Stanza>
                الوعي البشري ليس تراكمًا… بل تدفّق. والذاكرة ليست تاريخًا… بل نظام تنبؤ ومعنى. والذكاء ليس مستوى… بل موجة تتحرك بقدر حاجتك إليها. الإنسان لا يعمل وفق نموذج “الآلة التي تقرأ الماضي”، بل وفق نموذج “الكائن الذي يكوّن معنى من العدم لحظة بلحظة”.
            </Stanza>
            <Stanza>
                نحن لا نتذكر الحياة… نحن نعيد اختراعها في كل مرة نفكر فيها بها.
            </Stanza>
        </div>
      </div>
    </div>
  );
}
