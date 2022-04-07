import { ITool } from '../../interfaces/tools';

const tools: ITool[] = [
  /*
  ## DNS
  */
  {
    path: 'dns-a',
    label: 'DNS A Record',
    tags: ['home', 'dns'],
    rate: 3,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },
  {
    path: 'aaaa-record',
    label: 'AAAA Record',
    tags: ['home', 'dns'],
    rate: 2,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },
  {
    path: 'cname-record',
    label: 'CNAME Record',
    tags: ['home', 'dns'],
    rate: 2,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },
  {
    path: 'ns-record',
    label: 'NS Record',
    tags: ['home', 'dns'],
    rate: 4,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },
  {
    path: 'txt-record',
    label: 'TXT Record',
    tags: ['home', 'dns'],
    rate: 4,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },

  /*
  ## Email
  */
  {
    path: 'mx-record',
    label: 'MX Record',
    tags: ['home', 'email'],
    rate: 4,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },
  {
    path: 'spf-record',
    label: 'SPF Record',
    tags: ['home', 'email'],
    rate: 5,
    brief: 'SPF specifies the mail servers that are allowed to send email for your domain.',
    description:
      'An SPF record defines the mail servers and domains that are allowed to send email on behalf of your domain. It also tells receiving servers what to do with messages after they’re checked. Receiving servers check your SPF record to verify that incoming messages that appear to be from your organization are sent from servers authorized by you. Domains can have one SPF record. However, the SPF record for a domain can specify multiple servers and third parties that are allowed to send email for the domain.',
  },
  {
    path: 'dkim-record',
    label: 'DKIM Record',
    tags: ['home', 'email'],
    rate: 5,
    brief: 'DKIM adds an encrypted signature to the header of all outgoing messages.',
    description:
      'Email spoofing is when email content is changed to make the message appear from someone or somewhere other than the actual source. Spoofing is a common unauthorized use of email, so some email servers require DKIM to prevent email spoofing. DKIM adds an encrypted signature to the header of all outgoing messages. Email servers that get signed messages use DKIM to decrypt the message header,  and verify the message was not changed after it was sent.',
  },
  {
    path: 'dmarc-record',
    label: 'DMARC Record',
    tags: ['home', 'email'],
    rate: 3,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },

  /*
  ## Performance
  */
  {
    path: 'favicon',
    label: 'Favicon Generator',
    tags: ['performance'],
    rate: 5,
    brief: 'A favicon is a graphic image associated with a particular Web page or site.',
    description:
      'A favicon (short for favorite icon), also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons, associated with a particular website or web page.',
  },
  {
    path: 'http3',
    label: 'HTTP/3 QUIC Check',
    tags: ['performance'],
    rate: 5,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },

  /*
  ## Security
  */
  {
    path: 'security-headers',
    label: 'Security Headers',
    tags: ['security'],
    rate: 5,
    brief: 'Hey there',
    description: 'A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog. A quick brown fox over a lazy dog.',
  },
];

export default tools;
