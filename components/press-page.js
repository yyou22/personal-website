import {
  Container,
  Heading,
  Box,
  Text,
  HStack,
  Link,
  Image,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from './layouts/article'
import Section from './section'

const PressCard = ({
  title,
  publisher,
  date,
  href,
  image,
  snippet,
  cardBg,
  borderColor,
  mutedColor
}) => (
  <Box borderWidth="1px" borderColor={borderColor} bg={cardBg} borderRadius="lg" py={3} px={4}>
    <HStack align="center" spacing={{ base: 3, md: 4 }}>
      <Image
        src={image}
        alt={title}
        borderRadius="md"
        objectFit="cover"
        w={{ base: '160px', md: '176px' }}
        h={{ base: '104px', md: '88px' }}
        flexShrink={0}
      />
      <Box minW={0}>
        <HStack spacing={2} mb={1} flexWrap="wrap">
          <Badge colorScheme="teal">{date}</Badge>
          <Text fontSize="sm" color={mutedColor}>
            {publisher}
          </Text>
        </HStack>
        <Text fontWeight="bold" mb={1}>
          <Link href={href} isExternal color="#6b93a2">
            {title}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <Text fontSize="sm" color={mutedColor}>
          {snippet}
        </Text>
      </Box>
    </HStack>
  </Box>
)

const PressPage = () => {
  const cardBg = useColorModeValue('whiteAlpha.800', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const mutedColor = useColorModeValue('gray.600', 'gray.300')
  const yearHeadingColor = useColorModeValue('teal.600', 'teal.300')

  return (
    <Layout title="Press">
      <Container maxW="100%" px={0}>
        <Heading as="h3" fontSize={20} mb={4}>
          Press Coverage
        </Heading>
        <Text fontSize="md" color={mutedColor} mb={4} fontWeight="bold">
          Coverage that directly names and features me.
        </Text>

        <Box>
          <Box mb={6}>
            <Heading as="h4" size="sm" mb={3} color={yearHeadingColor}>
              2026
            </Heading>
            <Section>
              <PressCard
                title="Yuzhe You cooks up a storm at Adobe Summit 2026"
                publisher="Cheriton School of Computer Science, University of Waterloo"
                date="Apr 2026"
                href="https://uwaterloo.ca/computer-science/news/yuzhe-you-cooks-storm-adobe-summit-2026"
                image="https://uwaterloo.ca/computer-science/sites/default/files/uploads/resize/yuzhe-sneaks-photo-1000x666_1.png"
                snippet="Coverage of my research Project Test Kitchen at Adobe Summit Sneaks, selected as 1 of 7 from 500+ submissions."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.03}>
              <PressCard
                title="Yuzhe You presents at Adobe Summit 2026"
                publisher="Faculty of Mathematics, University of Waterloo"
                date="Apr 2026"
                href="https://uwaterloo.ca/math/news/yuzhe-you-presents-adobe-summit-2026"
                image="https://cs.uwaterloo.ca/sites/default/files/uploads/resize/backstage-of-sneaks-1000x750_1.jpeg"
                snippet="Mathematics feature highlighting my Adobe Summit presentation and cross-faculty recognition."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.06}>
              <PressCard
                title="Five Adobe Sneaks I Want Now"
                publisher="The AI Economy"
                date="Apr 2026"
                href="https://theaieconomy.substack.com/p/adobe-sneaks-2026-five-ai-prototypes-worth-watching"
                image="https://substackcdn.com/image/fetch/$s_!x1Nj!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45d75eac-991b-4450-a320-50eedc5b34de_960x540.jpeg"
                snippet="Independent media coverage of Adobe Sneaks 2026, featuring my research Project Test Kitchen."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.09}>
              <PressCard
                title="Math at the forefront of AI"
                publisher="Math e-Ties, University of Waterloo"
                date="Mar 2026"
                href="https://uwaterloo.ca/math-alumni-newsletter/news/math-forefront-ai"
                image="https://uwaterloo.ca/math-alumni-newsletter/sites/default/files/styles/uw_is_media_x_large/public/uploads/images/picture.jpeg?itok=PmZlLhSj"
                snippet="Roundup on AI research leadership with a spotlight on my research of gamifying explainable AI."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.12}>
              <PressCard
                title="International Women’s Day: Celebrating women researchers and entrepreneurs"
                publisher="Cheriton School of Computer Science, University of Waterloo"
                date="Mar 2026"
                href="https://uwaterloo.ca/computer-science/news/international-womens-day-celebrating-women-researchers-and"
                image="https://uwaterloo.ca/computer-science/sites/default/files/uploads/images/iwd-2026-banner.jpg"
                snippet="Feature story on women researchers and entrepreneurs, including my work on human-centered XAI."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
          </Box>

          <Box mb={6}>
            <Heading as="h4" size="sm" mb={3} color={yearHeadingColor}>
              2025
            </Heading>
            <Section>
              <PressCard
                title="Gamifying AI"
                publisher="Cheriton School of Computer Science, University of Waterloo"
                date="Sep 2025"
                href="https://uwaterloo.ca/computer-science/news/gamifying-ai"
                image="https://uwaterloo.ca/computer-science/sites/default/files/uploads/images/yuzhe_headshot-resized.png"
                snippet="Profile on my research vision and scholarship support for accessible explainable AI."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.03}>
              <PressCard
                title="Yuzhe You wins best student paper award at GI 2025 for novel cybersecurity tool"
                publisher="Cheriton School of Computer Science, University of Waterloo"
                date="Jun 2025"
                href="https://uwaterloo.ca/computer-science/news/yuzhe-you-wins-best-student-paper-award-gi-2025-novel"
                image="https://uwaterloo.ca/computer-science/sites/default/files/uploads/images/yuzhe-headshot.png"
                snippet="Coverage highlighting the GI 2025 Best Student Paper recognition for cybersecurity visualization research."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
          </Box>

          <Box>
            <Heading as="h4" size="sm" mb={3} color={yearHeadingColor}>
              2024 and before
            </Heading>
            <Section>
              <PressCard
                title="CPI Congratulates our Top 3 Winners in the CPI Annual Conference Poster Competition"
                publisher="Cybersecurity and Privacy Institute, University of Waterloo"
                date="Oct 2024"
                href="https://uwaterloo.ca/cybersecurity-privacy-institute/news/cpi-congratulates-our-top-3-winners-cpi-annual-conference"
                image="https://uwaterloo.ca/cybersecurity-privacy-institute/sites/default/files/uploads/images/yuzhe-you-jarvis-tse-advex_cpi_page-0001.jpg"
                snippet="Conference coverage recognizing top poster awards at the annual CPI conference, where I was selected as one of the award recipients."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.03}>
              <PressCard
                title="Meet the GRADflix finalist who combined art and programming to share her research"
                publisher="Graduate Studies and Postdoctoral Affairs, University of Waterloo"
                date="May 2023"
                href="https://uwaterloo.ca/current-graduate-students/news/meet-gradflix-finalist-who-combined-art-and-programming"
                image="https://uwaterloo.ca/current-graduate-students/sites/default/files/uploads/images/yuzhe_you_0.png"
                snippet="Feature on my GRADflix project blending pixel-art game design with research communication."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.06}>
              <PressCard
                title="Cheriton School of Computer Science undergrads and grads among winners at Waterloo.AI’s Data Challenge"
                publisher="Cheriton School of Computer Science, University of Waterloo"
                date="Nov 2022"
                href="https://cs.uwaterloo.ca/news/cheriton-students-among-winners-at-waterloo-ai-data-challenge"
                image="https://cs.uwaterloo.ca/sites/default/files/uploads/images/tensor-squad.jpeg"
                snippet="Recognition of Waterloo.AI Data Challenge winners from Cheriton CS, where my team was selected as one of the award recipients."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
          </Box>
        </Box>

        <Text fontSize="md" color={mutedColor} mt={2} fontWeight="bold">
          In addition to the above, my research at Adobe —{' '}
          <Link href="https://www.youtube.com/watch?v=HPjwlZ6knHg" isExternal color="#6b93a2">
            Project Test Kitchen
            <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          — has been highlighted in the following coverage.
        </Text>

        <Box mt={4}>
          <Box>
            <Heading as="h4" size="sm" mb={3} color={yearHeadingColor}>
              2026
            </Heading>
            <Section>
              <PressCard
                title="Adobe Summit 2026: Setting the stage for the next era of customer experience orchestration"
                publisher="Mint"
                date="May 2026"
                href="https://www.livemint.com/focus/adobe-summit-2026-setting-the-stage-for-the-next-era-of-customer-experience-orchestration-11777620405723.html"
                image="https://www.livemint.com/lm-img/img/2026/05/01/600x338/Umbrella_CX_Enterprise_1777620512330_1777620521366.jpg"
                snippet="Mint feature on Adobe Summit 2026 covering agentic AI announcements and Sneaks projects including my research Project Test Kitchen."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.03}>
              <PressCard
                title="The Future of Marketing at Adobe Summit 2026 | Adobe"
                publisher="Adobe"
                date="Apr 2026"
                href="https://www.youtube.com/watch?v=7Z-Dx6RfVLA"
                image="https://i.ytimg.com/vi/7Z-Dx6RfVLA/hqdefault.jpg"
                snippet="Official Adobe video coverage from Summit 2026 highlighting future marketing workflows and Sneaks direction. My research Project Test Kitchen is featured in the video."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.06}>
              <PressCard
                title="Adobe Summit Sneaks previews how agentic AI is transforming marketing workflows."
                publisher="Adobe Blog"
                date="Apr 2026"
                href="https://business.adobe.com/blog/adobe-summit-sneaks-2026"
                image="https://business.adobe.com/blog/media_1e82611ab4fd06c48455997acae93f9a91cfbdf50.png?width=2000&format=webply&optimize=medium"
                snippet="Adobe coverage featuring Sneaks 2026, including my research Project Test Kitchen."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.09}>
              <PressCard
                title="Adobe Sneaks 2026: AI That Builds, Tests & Personalizes Everything | Jist"
                publisher="jistnews"
                date="Apr 2026"
                href="https://www.youtube.com/shorts/8LuMmz3ojhM"
                image="https://i.ytimg.com/vi/8LuMmz3ojhM/hqdefault.jpg"
                snippet="Short-form coverage of Adobe Sneaks 2026 (including my research Project Test Kitchen) focused on AI-powered building, testing, and personalization workflows."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.12}>
              <PressCard
                title="Adobe Summit: Turning guesswork into predictions"
                publisher="RetailBiz"
                date="Apr 2026"
                href="https://www.retailbiz.com.au/technology/adobe-summit-turning-guesswork-into-predictions/"
                image="https://www.retailbiz.com.au/wp-content/uploads/2026/04/RB-Adobe_Turning-guesswork-into-predictions_Adobe-Sneaks-2026-Eric-Matisoff-Iliza-Shlesinger.jpg"
                snippet="RetailBiz coverage of Adobe Sneaks 2026, including my research Project Test Kitchen and the seven selected live demos."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.15}>
              <PressCard
                title="Adobe unveils AI tools to accelerate marketing content creation"
                publisher="VARINDIA"
                date="Apr 2026"
                href="https://www.varindia.com/news/adobe-unveils-ai-tools-to-accelerate-marketing-content-creation"
                image="https://www.varindia.com/storage/news/2026/04/THaJc3CFS2SO45fEjioNhLjNjB1UC6fK0UPTvAVe.webp"
                snippet="VARINDIA coverage of Adobe Summit Sneaks 2026, including Project Test Kitchen and other AI marketing workflow demos."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.18}>
              <PressCard
                title="Adobe Sneaks 2026: Winning Demo Sees AI Turn Campaign Guesswork Into Predictions"
                publisher="B&T"
                date="Apr 2026"
                href="https://www.bandt.com.au/adobe-sneaks-2026-winning-demo-sees-ai-turn-campaign-guesswork-into-predictions/"
                image="https://www.bandt.com.au/information/uploads/2026/04/Screenshot-2026-04-23-at-9.06.02%E2%80%AFAM.png"
                snippet="B&T coverage of Adobe Sneaks 2026 highlighting my research Project Test Kitchen and other live demos selected from 500+ submissions."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.21}>
              <PressCard
                title="Adobe rolls out tools for real-time web personalisation and automated marketing"
                publisher="Social Samosa"
                date="Apr 2026"
                href="https://www.socialsamosa.com/industry-updates/adobe-tools-real-time-web-personalisation-automated-marketing-11757848"
                image="https://img-cdn.publive.online/fit-in/1280x960/filters:format(webp)/socialsamosa/media/media_files/2026/04/23/19-7-2026-04-23-15-53-04.jpg"
                snippet="Social Samosa coverage of Adobe Summit Sneaks 2026, including my research Project Test Kitchen and real-time personalization tools."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.24}>
              <PressCard
                title="Adobe shows AI tools that turn ideas into full marketing campaigns"
                publisher="Times Now Digital"
                date="Apr 2026"
                href="https://www.msn.com/en-in/money/news/adobe-shows-ai-tools-that-turn-ideas-into-full-marketing-campaigns/ar-AA21Br5D?uxmode=ruby"
                image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA21B9FE.img?w=1012&h=569&m=6"
                snippet="Times Now Digital coverage of Adobe Summit Sneaks 2026, including my research Project Test Kitchen, and AI tools for building end-to-end marketing campaign assets."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
            <Section delay={0.27}>
              <PressCard
                title="ターゲットは「人間」から「AIエージェント」へ。Adobe CX Enterpriseが切り拓く次世代マーケティングの姿"
                publisher="クラウド Watch"
                date="Apr 2026"
                href="https://cloud.watch.impress.co.jp/docs/event/2103890.html"
                image="https://asset.watch.impress.co.jp/img/clw/docs/2103/890/026.jpg"
                snippet="Cloud Watch coverage of Adobe Summit 2026 and Sneaks, including discussion of my research Project Test Kitchen and agentic AI workflows."
                cardBg={cardBg}
                borderColor={borderColor}
                mutedColor={mutedColor}
              />
            </Section>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default PressPage
