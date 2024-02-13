<template>
  <div class="flex flex-col gap-y-32 pt-5 pb-4 md:py-36">
    <ResponsiveLayoutSection
      class="hidden lg:flex"
      image="image1.png"
      alt="Фотография высокой башни"
      title="We do campaigns that works well for your idea"
      text="Our documentary campaigns feature leading figures, organisations and leaders, in open and candid discussions about transformative strategies and mindsets. Addressing complex trends."
      link="/link1"
      link-text="All campaigns"
    />
    <ResponsiveLayoutSection
      image="image2.png"
      alt="Фотография видеокамеры"
      title="We make films that stick in your heart"
      text="This exclusive service provided by our team of professional content creators is available for global use. Our clients will have access and total creative control throughout the process of production, with resources and talent supplied by us."
      link="/link2"
      link-text="I have an idea for film"
      flex-row-reverse="lg:flex-row-reverse"
    />
    <ResponsiveLayoutSection
      class="lg:hidden"
      image="image3.png"
      alt="Фотография стадиона"
      title="We do event marketing to attract cool guys"
      text="Our marketing team is well-versed in creating the right strategy for every campaign, working with clients to deliver their desired outcome. We create effective plans, eye-catching digital aids, and dynamic solutions."
      link="/link3"
      link-text="Start an event marketing"
      flex-row-reverse="flex-row-reverse"
    />
  </div>
</template>

<script>
import ResponsiveLayoutSection from '@/components/ResponsiveLayoutSection.vue'

export default {
  components: {
    ResponsiveLayoutSection,
  },
  layout: 'responsive',
}
</script>
