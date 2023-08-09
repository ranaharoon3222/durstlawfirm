import Box from '@/commons/Box';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const ResultBoxes = () => {
  const results = [
    {
      title: 'personalinjury',
      boxes: [
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$175,000',
          content:
            'Settlement for client injured in accident involving semi-truck in which police initially determined client to be at fault. In this case, the team at The Durst Law Firm acted immediately to preserve bodycam footage, 911 recordings, and other time-sensitive evidence that ultimately proved crucial to establish that the truck driver was truly at fault.',
        },
        {
          title: '$100,000',
          content: 'Policy limit settlement for child pedestrian hit by car. ',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
      ],
    },
    {
      title: 'commerciallitigation',
      boxes: [
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
      ],
    },
    {
      title: 'appellate',
      boxes: [
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
        {
          title: '$1,000,000',
          content:
            'Settlement in case where landlord’s grossly negligent maintenance led to woman and children having to jump from third-floor apartment window in order to escape a fire.The Durst Law Firm acted immediately to preserve the scene before the evidence could be destroyed, making it possible to prove the landlord’s negligence. The client ultimately made a successful recovery. She and her family remain friends of the firm.',
        },
      ],
    },
  ];

  return (
    <section className='mt-10 mb-10'>
      <div className='container'>
        {results.map((item, i) => (
          <div key={i}>
            <h3 className='text-primary' id={item.title}>
              #{item.title}
            </h3>
            <div className='grid gap-10 md:grid-cols-3 df gap-y-3'>
              {item.boxes.map((box, index) => (
                <Box key={index} title={box.title} icon='/images/icon2.png'>
                  <Paragraph
                    dangerouslySetInnerHTML={{ __html: box.content }}
                  ></Paragraph>
                </Box>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultBoxes;
