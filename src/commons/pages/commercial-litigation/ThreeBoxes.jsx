import Box from '@/commons/Box';
import Button from '@/commons/Button';
import React from 'react';

const ThreeBoxes = () => {
  return (
    <section className='container '>
      <div className='items-center grid-cols-8 gap-8 my-16 md:grid '>
        <div className='col-span-4'>
          <Box
            icon='/images/comma.png'
            title='“Top-Shelf Results.”'
            name='- Ben W.'
            position='CEO, WHAM Properties'
          >
            <p>
              With our portfolio of over 200 rental units across multiple
              states, legal disputes are unavoidable. Over the past five years,
              The Durst Law Firm has represented us in dozens of civil cases,
              involving injunctions, partnership disputes, employment law,
              litigation with municipalities, breach of contract, fraud, and
              quiet title actions, among others, often with significant
              financial or business implications.
            </p>
            <p>
              The Durst Law Firm delivers top-shelf results, both inside and
              outside the courtroom. We consider the first's attorneys part of
              our management and leadership team, and they act as such, helping
              us to work through strategic dialogues. They are outstanding
              advisors.
            </p>
          </Box>
        </div>
        <div className='col-span-2'>
          <Box
            icon='/images/comma2.png'
            title='Defense Victory'
            name='Elec. Merch. Sys. LLC v. Gaal, et al.'
            position='No. 20-CV-1898, 2022 WL 2176537 (N.D. Ohio June 16, 2022).'
          >
            <p>
              Successful 12(b)(6) dismissal of lawsuit seeking $10,499,166 in
              damages, obtaining victory on behalf of European business
              enterprise incorporated in the United States including complete
              dismissal of all claims adverse company officer.
            </p>
          </Box>
        </div>
        <div className='col-span-2'>
          <Button
            text='More Testimonials'
            variant='primary-bg'
            className='mb-5'
          />
          <Button text='More Results' variant='primary-bg' />
        </div>
      </div>
    </section>
  );
};

export default ThreeBoxes;
