import Box from '@/commons/Box';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const TestimonialsBoxes = () => {
  const results = [
    {
      title: 'personalinjury',
      boxes: [
        {
          title: '“The absolute best!”',
          content: `<p>I hired Alex Durst to represent me in a truck accident case that was very serious and traumatic. Everyone at the firm was super professional and responsive at all times. Especially Alex, who was great at keeping me informed and quickly addressed all my concerns whenever I was worried about something.</p> <p>The truck company fought the case hard and tried to blame ME for the accident. My lawyers were not going to let that happen. They used private investigators to track down a key witness who was right behind me before the truck hit me who saw everything. Then they got bodycam videos from the police and a recorded 911 call from the truck driver that proved the truck driver was not telling the truth.</p> <p>In the end, I got a GREAT settlement. It’s a huge relief to be able to move on from this terrible experience knowing justice was done. I’m so grateful to Alex for his help and having his firm on my side during this process.</p><p>Highly recommend!!!</p>`,
          name: '- Gaby M.',
          position: 'Truck Accident Case',
        },
        {
          title: '“The absolute best!”',
          content: `<p>I hired Alex Durst to represent me in a truck accident case that was very serious and traumatic. Everyone at the firm was super professional and responsive at all times. Especially Alex, who was great at keeping me informed and quickly addressed all my concerns whenever I was worried about something.</p> <p>The truck company fought the case hard and tried to blame ME for the accident. My lawyers were not going to let that happen. They used private investigators to track down a key witness who was right behind me before the truck hit me who saw everything. Then they got bodycam videos from the police and a recorded 911 call from the truck driver that proved the truck driver was not telling the truth.</p> <p>In the end, I got a GREAT settlement. It’s a huge relief to be able to move on from this terrible experience knowing justice was done. I’m so grateful to Alex for his help and having his firm on my side during this process.</p><p>Highly recommend!!!</p>`,
          name: '- Gaby M.',
          position: 'Truck Accident Case',
        },
        {
          title: '“The absolute best!”',
          content: `<p>I hired Alex Durst to represent me in a truck accident case that was very serious and traumatic. Everyone at the firm was super professional and responsive at all times. Especially Alex, who was great at keeping me informed and quickly addressed all my concerns whenever I was worried about something.</p> <p>The truck company fought the case hard and tried to blame ME for the accident. My lawyers were not going to let that happen. They used private investigators to track down a key witness who was right behind me before the truck hit me who saw everything. Then they got bodycam videos from the police and a recorded 911 call from the truck driver that proved the truck driver was not telling the truth.</p> <p>In the end, I got a GREAT settlement. It’s a huge relief to be able to move on from this terrible experience knowing justice was done. I’m so grateful to Alex for his help and having his firm on my side during this process.</p><p>Highly recommend!!!</p>`,
          name: '- Gaby M.',
          position: 'Truck Accident Case',
        },
      ],
    },
    {
      title: 'commerciallitigation',
      boxes: [
        {
          title: '“The absolute best!”',
          content: `<p>I hired Alex Durst to represent me in a truck accident case that was very serious and traumatic. Everyone at the firm was super professional and responsive at all times. Especially Alex, who was great at keeping me informed and quickly addressed all my concerns whenever I was worried about something.</p> <p>The truck company fought the case hard and tried to blame ME for the accident. My lawyers were not going to let that happen. They used private investigators to track down a key witness who was right behind me before the truck hit me who saw everything. Then they got bodycam videos from the police and a recorded 911 call from the truck driver that proved the truck driver was not telling the truth.</p> <p>In the end, I got a GREAT settlement. It’s a huge relief to be able to move on from this terrible experience knowing justice was done. I’m so grateful to Alex for his help and having his firm on my side during this process.</p><p>Highly recommend!!!</p>`,
          name: '- Gaby M.',
          position: 'Truck Accident Case',
        },
        {
          title: '“The absolute best!”',
          content: `<p>I hired Alex Durst to represent me in a truck accident case that was very serious and traumatic. Everyone at the firm was super professional and responsive at all times. Especially Alex, who was great at keeping me informed and quickly addressed all my concerns whenever I was worried about something.</p> <p>The truck company fought the case hard and tried to blame ME for the accident. My lawyers were not going to let that happen. They used private investigators to track down a key witness who was right behind me before the truck hit me who saw everything. Then they got bodycam videos from the police and a recorded 911 call from the truck driver that proved the truck driver was not telling the truth.</p> <p>In the end, I got a GREAT settlement. It’s a huge relief to be able to move on from this terrible experience knowing justice was done. I’m so grateful to Alex for his help and having his firm on my side during this process.</p><p>Highly recommend!!!</p>`,
          name: '- Gaby M.',
          position: 'Truck Accident Case',
        },
        {
          title: '“The absolute best!”',
          content: `<p>I hired Alex Durst to represent me in a truck accident case that was very serious and traumatic. Everyone at the firm was super professional and responsive at all times. Especially Alex, who was great at keeping me informed and quickly addressed all my concerns whenever I was worried about something.</p> <p>The truck company fought the case hard and tried to blame ME for the accident. My lawyers were not going to let that happen. They used private investigators to track down a key witness who was right behind me before the truck hit me who saw everything. Then they got bodycam videos from the police and a recorded 911 call from the truck driver that proved the truck driver was not telling the truth.</p> <p>In the end, I got a GREAT settlement. It’s a huge relief to be able to move on from this terrible experience knowing justice was done. I’m so grateful to Alex for his help and having his firm on my side during this process.</p><p>Highly recommend!!!</p>`,
          name: '- Gaby M.',
          position: 'Truck Accident Case',
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
            <div className='grid df md:grid-cols-3 gap-10 gap-y-3'>
              {item.boxes.map((box, index) => (
                <Box
                  key={index}
                  title={box.title}
                  name={box.name}
                  position={box.position}
                  icon='./images/icons.png'
                >
                  <div dangerouslySetInnerHTML={{ __html: box.content }}></div>
                </Box>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsBoxes;
