import BannerV2 from '@/commons/BannerV2';
import GroupButtons from '@/commons/GroupButtons';
import Paragraph from '@/commons/Paragraph';
import React from 'react';

const AppealsBanner = () => {
  return (
    <div>
      <BannerV2
        title='Ohio Appeals'
        subTitle={'Cincinnati, Ohio Appellate Lawyer'}
      >
        <Paragraph>
          The Durst Law Firm not only regularly handles appeals but maintains
          deep roots within the appellate legal community in Cincinnati. As a
          result, we are able to offer immense value to appellate clients and
          out-of-town law firms who need local counsel in Ohio, particularly in
          appeals before Ohio’s First District Court of Appeals.
        </Paragraph>

        <Paragraph>
          An appeal is an extension of the trial process but requires a slightly
          different skill set. We treat our appellate practice, which
          complements our trial practice, as another vehicle for achieving our
          clients’ business and litigation objectives.
        </Paragraph>

        <GroupButtons />
      </BannerV2>
    </div>
  );
};

export default AppealsBanner;
