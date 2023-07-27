import CustomImg from '@/commons/CustomImg';
import React from 'react';

const RepresenTiveCol = () => {
  return (
    <div className='my-28'>
      <div className='container'>
        <div className='grid gap-10 md:grid-cols-2 md:gap-16'>
          <div className='max-w-[700px]'>
            <h1>
              <span className='text-primary'> Representative </span> Ohio Local
              Counsel Matters
            </h1>
            <ul className='mt-5 listing'>
              <li className='mb-5'>
                Represented publicly traded Korean pharmaceutical company in
                civil action removed to the Southern District of Ohio, Western
                Division (Cincinnati), as local counsel and co-counsel with
                Epstein Becker & Green, P.C. Obtained dismissal of majority of
                claims against client under Fed. R. Civ. P. 12(b)(6).
              </li>
              <li className='mb-5'>
                Represented national PPE wholesaler and company officer in
                action filed in the Southern District of Ohio, Eastern Division
                (Columbus), as lead counsel and co-counsel with O’Neil, Cannon,
                Hollman, DeJong & Laing S.C. of Wisconsin. Obtained complete
                dismissal under Fed. R. Civ. P. 12(b)(6) & 14(a)(4) of all
                claims, which sought over $9,000,000.00 in damages.
              </li>
              <li className='mb-5'>
                Represented E-Commerce companies in electronic payment
                processing litigation in actions filed in Ohio state, federal
                and arbitration tribunals involving multi-million-dollar damages
                claims, as local counsel and co-counsel with California-based
                Rome & Associates, APC. Obtained preliminary injunction freezing
                assets of PayFac (credit card processing company).
              </li>
              <li className='mb-5'>
                Represented New York merchant cash advance companies in multiple
                conversion and civil RICO actions filed by banks involving
                damages claims of up to $60,000,000.00, as lead counsel.
              </li>
            </ul>
          </div>

          <div>
            <CustomImg img='./images/representativeimg.jpg' />
            <div className='grid grid-cols-1 gap-10 my-10 md:grid-cols-2'>
              <div>
                <h1>Ohio State & Federal Courts</h1>
                <p>
                  We serve as local counsel in state courts located in
                  Cincinnati, Dayton, Columbus, Toledo and Cleveland, as well as
                  all federal courts in Ohio, including:
                </p>
              </div>
              <div>
                <ul className='listing'>
                  <li className='mt-3'>
                    U.S. District Court, Southern District of Ohio
                  </li>
                  <li className='mt-3'>
                    U.S. District Court, Northern District of Ohio
                  </li>
                  <li className='mt-3'>
                    U.S. Bankruptcy Court, Southern District of Ohio
                  </li>
                  <li className='mt-3'>
                    U.S. Bankruptcy Court, Northern District of Ohio
                  </li>
                  <li className='mt-3'>U.S. Court of Appeals, Sixth Circuit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresenTiveCol;
