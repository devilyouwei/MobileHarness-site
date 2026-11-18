export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const asset = (name: string) => `${base}/media/${name}`;
export interface Media {
  id: string;
  title: string;
  description: string;
  kind: 'image' | 'video';
}
const image = (id: string, title: string, description: string): Media => ({
  id,
  title,
  description,
  kind: 'image',
});
const video = (id: string, title: string, description: string): Media => ({
  id,
  title,
  description,
  kind: 'video',
});
export const categories = [
  {
    slug: 'robotics',
    label: '01',
    title: 'Robotics',
    subtitle: 'A phone at the heart of the robot.',
    description:
      'Connect an iPhone to a supported NexArm robotic arm. Agent requests become bounded device operations, with actual outcomes returned to the decision loop.',
    media: [
      video(
        'nexarm-control-demo',
        'NexArm control',
        'A phone mounted on NexArm during an Assistant interaction.',
      ),
      video(
        'nexarm-motion-demo',
        'From intent to motion',
        'NexArm moves the mounted phone. Supported hardware and explicit device authorization are required.',
      ),
    ],
  },
  {
    slug: 'voice',
    label: '02',
    title: 'Voice interaction',
    subtitle: 'A conversation with the world.',
    description:
      'Speak to the Assistant, follow live captions, and receive spoken responses with expressive eyes. Interruption handling depends on the audio route and configured Decision model.',
    media: [
      video(
        'start-listening-demo',
        'Start listening',
        'Press and hold the companion’s eyes to enable listening.',
      ),
      image(
        'everyday-voice-interaction',
        'Conversation in context',
        'Voice interaction with captions, expressive eyes and visual pose overlays.',
      ),
    ],
  },
  {
    slug: 'photography',
    label: '03',
    title: 'Photography & album',
    subtitle: 'Capture the moment. Keep the result.',
    description:
      'Use camera controls or voice requests for supported photo and video operations. Review captured media in the app album. Autonomous composition and camera movement remain separate future work.',
    media: [
      image(
        'photography-camera',
        'Camera workspace',
        'Camera controls and recent-photo thumbnails during a photography task.',
      ),
      image(
        'photography-album',
        'Your captured media',
        'Browse saved photos in the app album.',
      ),
    ],
  },
  {
    slug: 'creation',
    label: '04',
    title: 'Creative collaboration',
    subtitle: 'One conversation. More possibilities.',
    description:
      'Assistant delegates authoring work to Writer, which owns its context and workspace. Create illustrated articles, diagrams and interactive content, then refine or reopen the result.',
    media: [
      video(
        'writer-drawing-demo',
        'Ideas taking shape',
        'An existing recording of content developing in the Writer preview.',
      ),
      image(
        'writer-illustrated-article',
        'Illustrated writing',
        'A Writer-created article explaining the banker algorithm.',
      ),
      image(
        'writer-visual-flowchart',
        'Visual explanations',
        'A generated processing flowchart reopened from saved work.',
      ),
    ],
  },
  {
    slug: 'web',
    label: '05',
    title: 'Web browsing',
    subtitle: 'Bring the web into the conversation.',
    description:
      'Open and read HTTP or HTTPS pages in an in-app browser. The browsing skill can extract text, inspect screenshots and navigate within its supported scope.',
    media: [
      image(
        'web-browsing',
        'Browse with the Assistant',
        'Search results displayed in the native app’s browser window.',
      ),
    ],
  },
  {
    slug: 'interaction',
    label: '06',
    title: 'Multiwindow interaction',
    subtitle: 'Tools that share your workspace.',
    description:
      'Keep browser and Writer windows together, follow ongoing work, and use supported window controls through the Assistant.',
    media: [
      image(
        'interactive-multiwindow',
        'A connected workspace',
        'Browser and Writer windows displayed together.',
      ),
      image(
        'interactive-minimized-windows',
        'Control the workspace',
        'Windows minimized after a voice request.',
      ),
    ],
  },
];
export const featured = [
  categories[0].media[0],
  categories[0].media[1],
  categories[3].media[0],
  categories[1].media[0],
];
export const citation = `@misc{mobileharness2026,
  author = {devilyouwei},
  title = {MobileHarness: A Mobile Harness for Embodied Agents},
  year = {2026},
  howpublished = {Software project},
  url = {https://github.com/devilyouwei/MobileHarness}
}`;
