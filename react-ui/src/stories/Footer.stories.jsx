// import React from 'react';
// import Footer from './Footer';

// export default {
//   title: 'Footer',
//   component: Footer,
// };

// const Template = (args) => <Footer {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Primary Button',
// };


import React from 'react';
import Footer from '../components/Requirements/Headers/Footer';

export default {
  title: 'Headers/Footer',
  component: Footer,
};

export const WithTextFooter = () => <Footer label ="Main Heading" color="lightblue" multiText="true" secondaryText="Sub-Heading"/>;

