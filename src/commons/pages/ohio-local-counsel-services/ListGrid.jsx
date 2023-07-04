import React from 'react';

const ListGrid = () => {
  const lists = [
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
    {
      title: `<b>Prepared to act immediately </b>  to remove a case to federal court, file responsive pleadings, preserve a statute of limitations, seek or defend against a temporary restraining order or preliminary injunction, draft responsive pleadings, or take other time-sensitive action.`,
    },
  ];

  return (
    <section className='bg-[#F2F2F2] pt-10 pb-10'>
      <div className='container'>
        <h1 className='text-center'> Our Lawyers Are:</h1>
        <div className='grid gap-10 md:grid-cols-3 listing py-10'>
          {lists.map((item, i) => (
            <ul key={i}>
              <li dangerouslySetInnerHTML={{ __html: item.title }}></li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListGrid;
