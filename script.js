/* ============================================================
   FILM CLIP TRACKER — script.js
   Full Production Scripts, Wardrobe Guides, Estimated Runtimes,
   Live Deadline Countdown & Shareable URL Sync System
   ============================================================ */

// ─── Inline SVG Icons ──────────────────────────
const ICONS = {
  clock: `<svg class="icon mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  shirt: `<svg class="icon mini-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 2 1.67h1.18L6 20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l-.04-9.14h1.18a2 2 0 0 0 2-1.67l.58-3.5a2 2 0 0 0-1.34-2.23z"/></svg>`,
  pin: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  users: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  search: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
};

const CLIPS = [
  {
    id: 1,
    title: "The Star",
    scene: "Scene 1",
    estTime: "1m 15s",
    location: "Classroom / stage / covered court",
    actors: ["Alex", "Host", "Fan 1", "Fan 2", "Photographer"],
    wardrobe: [
      { character: "Alex", outfit: "Stylish celebrity attire (neat jacket/blazer, branded or clean plain tee, tidy hair, slight glam)." },
      { character: "Host", outfit: "Smart casual / formal interview look (polo shirt or blazer, slacks)." },
      { character: "Fans 1 & 2", outfit: "Casual school/streetwear (graphic tees, hoodies, backpacks or fan merchandise)." },
      { character: "Photographer", outfit: "All black/dark casual outfit, lanyard/media pass, camera strap." }
    ],
    elements: [
      {
        type: "shot",
        label: "Shot 1 – Wide Shot",
        content: [
          { type: "action", text: "Alex nasa harap. Fans nasa likod/front. Photographer kumukuha ng pictures." },
          { type: "dialogue", character: "PHOTOGRAPHER", line: "Alex! Look this way!" },
          { type: "dialogue", character: "FAN 1", line: "Alex! We love you!" },
          { type: "dialogue", character: "FAN 2", line: "One more picture!" },
          { type: "action", text: "Alex smiles and poses." }
        ]
      },
      {
        type: "shot",
        label: "Shot 2 – Medium Shot",
        content: [
          { type: "action", text: "Host and Alex sit facing each other." },
          { type: "dialogue", character: "HOST", line: "Alex, congratulations. Your career has grown so much. How does it feel?" },
          { type: "dialogue", character: "ALEX", line: "Honestly, it still feels unreal." },
          { type: "dialogue", character: "HOST", line: "Who do you want to thank?" },
          { type: "dialogue", character: "ALEX", line: "My family, my friends, my team, and everyone who continues to support me." },
          { type: "dialogue", character: "HOST", line: "Is there anything you're afraid of losing?" },
          { type: "dialogue", character: "ALEX", line: "Trust." },
          { type: "dialogue", character: "HOST", line: "Trust?" },
          { type: "dialogue", character: "ALEX", line: "Yes. Once people stop trusting you, it is difficult to make them listen." },
          { type: "cut", text: "CUT." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Leak",
    scene: "Scene 2",
    estTime: "45s",
    location: "Quiet classroom / bedroom",
    actors: ["Raven only"],
    wardrobe: [
      { character: "Raven", outfit: "Dark hoodie (black or charcoal grey), hood up or messy hair, subdued look to evoke secrecy." }
    ],
    elements: [
      {
        type: "shot",
        label: "Shot 1 – Over-the-shoulder",
        content: [
          { type: "action", text: "Raven sits in front of laptop/phone." },
          { type: "action", text: "Important: Huwag ipakita ang actual sensitive video. Screen lang na may generic blurred/black screen." },
          { type: "action", text: 'Raven types: “The truth about Alex Reyes.”' },
          { type: "action", text: "Raven pauses." }
        ]
      },
      {
        type: "shot",
        label: "Shot 2 – Close-up",
        content: [
          { type: "action", text: "Finger presses POST." }
        ]
      },
      {
        type: "shot",
        label: "Shot 3 – Close-up of phone/laptop",
        content: [
          {
            type: "insert",
            label: "Screen Counter",
            lines: ["127 VIEWS", "2,500 VIEWS", "25,000 VIEWS", "100,000 VIEWS"]
          },
          { type: "action", text: "Raven watches silently." },
          { type: "cut", text: "CUT TO BLACK." },
          { type: "action", text: "Ito mismo ang basic action ng Scene 2 ng original script." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "It Goes Viral",
    scene: "Scenes 3–4",
    estTime: "1m 15s",
    location: "Hallway / Cafeteria",
    actors: ["Fan 1", "Fan 2", "Fan 3", "Hater 1", "Hater 2", "Neutral User", "Influencer"],
    wardrobe: [
      { character: "Students / Fans & Haters", outfit: "Standard school uniforms or daily college casuals (t-shirts, jeans, tote bags)." },
      { character: "Influencer", outfit: "Trendy Gen-Z outfit (stylish jacket/earrings, neat ring-light ready styling, ring accessories)." }
    ],
    elements: [
      {
        type: "shot",
        label: "Shot 1 – Medium shot",
        content: [
          { type: "action", text: "Fan 1 looks at phone." },
          { type: "dialogue", character: "FAN 1", line: "Guys, have you seen this?" },
          { type: "dialogue", character: "FAN 2", line: "Seen what?" },
          { type: "action", text: "Fan 1 shows phone." },
          { type: "dialogue", character: "FAN 2", line: "Wait... Is that Alex?" },
          { type: "action", text: "Hater 1 enters." },
          { type: "dialogue", character: "HATER 1", line: "Everyone is talking about it." },
          { type: "dialogue", character: "FAN 3", line: "Do we know if it's actually real?" },
          { type: "dialogue", character: "HATER 2", line: "The video is right there. What else do you need?" },
          { type: "dialogue", character: "NEUTRAL USER", line: "We don't know the whole story yet." },
          { type: "dialogue", character: "HATER 1", line: "Why are you defending Alex?" },
          { type: "dialogue", character: "NEUTRAL USER", line: "I'm not defending anyone. I'm saying we should verify it first." },
          { type: "action", text: "Hater 2 raises phone." },
          { type: "dialogue", character: "HATER 2", line: "Too late." },
          { type: "action", text: "Hater presses SHARE." }
        ]
      },
      {
        type: "shot",
        label: "Shot 2 – Influencer",
        content: [
          { type: "action", text: "Influencer faces phone camera." },
          { type: "dialogue", character: "INFLUENCER", line: "Hey, everyone. So, by now, you've probably seen the Alex Reyes video." },
          { type: "action", text: "Pause." },
          { type: "dialogue", character: "INFLUENCER", line: "It's already getting millions of views." },
          { type: "action", text: "Pause." },
          { type: "dialogue", character: "INFLUENCER", line: "I'm not saying everything has been confirmed, but..." },
          { type: "action", text: "Looks at camera." },
          { type: "dialogue", character: "INFLUENCER", line: "You can watch it and decide for yourself." },
          { type: "cut", text: "CUT." },
          { type: "action", text: "Original dialogue is from Scenes 3–4." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Alex Finds Out",
    scene: "Scene 5",
    estTime: "1m 00s",
    location: "Classroom arranged like living room",
    actors: ["Alex", "Mia"],
    wardrobe: [
      { character: "Alex", outfit: "Comfortable homewear/loungewear (loose plain sweatshirt, joggers), looking relaxed before shock hits." },
      { character: "Mia", outfit: "Manager/Friend look (smart casual cardigan or blouse with slacks, carrying bag or folder)." }
    ],
    elements: [
      {
        type: "shot",
        label: "Shot 1 – Close-up",
        content: [
          { type: "action", text: "Phone vibrating. BUZZ. BUZZ. BUZZ." },
          { type: "action", text: "Alex looks at phone." },
          {
            type: "insert",
            label: "Insert Shot – Fake Headlines",
            lines: ['“ALEX REYES EXPOSED”', '“FANS DEMAND ANSWERS”', '“CANCEL ALEX REYES”']
          }
        ]
      },
      {
        type: "shot",
        label: "Shot 2 – Two-shot",
        content: [
          { type: "action", text: "Mia enters." },
          { type: "dialogue", character: "MIA", line: "Alex?" },
          { type: "action", text: "Alex gives phone to Mia." },
          { type: "dialogue", character: "MIA", line: "Oh my God." },
          { type: "dialogue", character: "ALEX", line: "It's not what they think." },
          { type: "dialogue", character: "MIA", line: "I know." },
          { type: "dialogue", character: "ALEX", line: "They don't even know what happened." },
          { type: "dialogue", character: "MIA", line: "Then we'll explain." },
          { type: "dialogue", character: "ALEX", line: "To who?" },
          { type: "action", text: "Pause." },
          { type: "dialogue", character: "ALEX", line: "Millions of people have already decided I'm guilty." },
          { type: "dialogue", character: "MIA", line: "Then we'll find a way to tell the truth." },
          { type: "cut", text: "CUT." }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "The Consequences",
    scene: "Scenes 6–7",
    estTime: "1m 30s",
    location: "Classroom as office / backstage",
    actors: ["Mia", "Lawyer", "Label Representative", "Alex", "Host", "Staff Member"],
    wardrobe: [
      { character: "Label Rep & Lawyer", outfit: "Formal business attire (suits, blazers, button-downs, eyeglasses, folders)." },
      { character: "Mia", outfit: "Stressed professional (blazer with rolled-up sleeves, hair tied back)." },
      { character: "Alex", outfit: "Dressed for an interview (semi-formal polo or neat jacket) with clip-on lavalier mic attached." },
      { character: "Host & Staff", outfit: "Host in studio outfit; Staff member in production crew black shirt with headset/clipboard." }
    ],
    elements: [
      {
        type: "part",
        label: "PART A — Office",
        content: [
          {
            type: "shot",
            label: "Shot – Medium group shot",
            content: [
              { type: "dialogue", character: "LABEL REPRESENTATIVE", line: "The situation is getting bigger every hour." },
              { type: "dialogue", character: "MIA", line: "Alex hasn't even been given a chance to explain." },
              { type: "dialogue", character: "LAWYER", line: "We need to be careful. We need to establish exactly where the video came from." },
              { type: "dialogue", character: "LABEL REPRESENTATIVE", line: "But several sponsors are asking questions." },
              { type: "dialogue", character: "MIA", line: "So what happens now?" },
              { type: "dialogue", character: "LABEL REPRESENTATIVE", line: "The upcoming projects are being placed on hold." },
              { type: "action", text: "Alex hears this from outside." },
              { type: "dialogue", character: "ALEX", line: "Okay." },
              { type: "action", text: "Alex walks away." }
            ]
          }
        ]
      },
      {
        type: "part",
        label: "PART B — Cancelled Interview",
        content: [
          {
            type: "shot",
            label: "Shot – Backstage",
            content: [
              { type: "action", text: "Host and Staff Member prepare." },
              { type: "dialogue", character: "STAFF MEMBER", line: "Alex is ready backstage." },
              { type: "dialogue", character: "HOST", line: "Good. Let's bring them in." },
              { type: "action", text: "Mia approaches Alex." },
              { type: "dialogue", character: "MIA", line: "Alex..." },
              { type: "dialogue", character: "ALEX", line: "What happened?" },
              { type: "dialogue", character: "MIA", line: "The network wants to postpone the interview." },
              { type: "dialogue", character: "ALEX", line: "Why?" },
              { type: "dialogue", character: "MIA", line: "They're concerned about the controversy." },
              { type: "dialogue", character: "ALEX", line: "So they don't want me to speak?" },
              { type: "action", text: "Mia remains silent." },
              { type: "dialogue", character: "ALEX", line: "They want people to talk about me, but they don't want to hear from me." },
              { type: "action", text: "Alex removes microphone." },
              { type: "dialogue", character: "ALEX", line: "Okay." },
              { type: "cut", text: "CUT." }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Three Months",
    scene: "Scenes 8–10",
    estTime: "1m 15s",
    location: "Bedroom / classroom",
    actors: ["Alex", "Mia", "Hater 1", "Hater 2", "Fan 3"],
    wardrobe: [
      { character: "Alex", outfit: "Disheveled look: oversized dark hoodie or plain faded grey shirt, messy unstyled hair, weary vibe." },
      { character: "Mia", outfit: "Subtle casual (simple knit top/jacket), empathetic expression." },
      { character: "Voices (Haters/Fans)", outfit: "Voiceover only — no on-screen costume required." }
    ],
    elements: [
      {
        type: "action",
        text: "Ito ay montage, kaya mabilis lang. Hindi kailangan ng maraming dialogue."
      },
      {
        type: "shot",
        label: "Shot 1 – Alex alone",
        content: [
          { type: "action", text: "Phone in hand." },
          { type: "dialogue", character: "HATER 1 (voice)", line: "Disgusting." },
          { type: "dialogue", character: "HATER 2 (voice)", line: "Your career is over." },
          { type: "dialogue", character: "FAN 3 (voice)", line: "I used to look up to you." },
          { type: "action", text: "Alex locks phone." }
        ]
      },
      {
        type: "shot",
        label: "Shot 2 – Door",
        content: [
          { type: "action", text: "Mia knocks." },
          { type: "dialogue", character: "MIA", line: "Alex?" },
          { type: "action", text: "No answer." },
          { type: "dialogue", character: "MIA", line: "You have another interview request." },
          { type: "action", text: "Silence." },
          { type: "dialogue", character: "MIA", line: "You don't have to do it." },
          { type: "dialogue", character: "ALEX", line: "I don't want to go." },
          { type: "dialogue", character: "MIA", line: "Are you sure?" },
          { type: "dialogue", character: "ALEX", line: "Everywhere I go, people look at me like I'm guilty." },
          { type: "dialogue", character: "ALEX", line: "I don't even know how to face people anymore." },
          { type: "dialogue", character: "MIA", line: "You don't have to face everyone today." }
        ]
      },
      {
        type: "shot",
        label: "Shot 3 – Mirror",
        content: [
          { type: "action", text: "Alex looks at mirror/microphone." },
          { type: "dialogue", character: "ALEX", line: "I used to love this." },
          { type: "action", text: "Pause." },
          { type: "dialogue", character: "ALEX", line: "Now I'm afraid of it." },
          { type: "cut", text: "CUT TO BLACK." },
          {
            type: "endtext",
            lines: ["THREE MONTHS LATER"]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Something Doesn't Add Up",
    scene: "Scene 11",
    estTime: "50s",
    location: "Computer lab",
    actors: ["Jay", "Witness"],
    wardrobe: [
      { character: "Jay", outfit: "Student researcher look (denim jacket or overshirt over plain tee, backpack, eyeglasses if available)." },
      { character: "Witness", outfit: "Low-profile casual (plain polo/shirt, simple jacket, looking cautious)." }
    ],
    elements: [
      {
        type: "shot",
        label: "Shot 1 – Over-the-shoulder",
        content: [
          { type: "action", text: "Jay watches the video." },
          { type: "dialogue", character: "JAY", line: "Wait." },
          { type: "dialogue", character: "WITNESS", line: "What?" },
          { type: "dialogue", character: "JAY", line: "Look at the timestamp." },
          { type: "dialogue", character: "WITNESS", line: "What about it?" },
          { type: "dialogue", character: "JAY", line: "It doesn't match the date people are talking about." },
          { type: "action", text: "Jay opens another version." },
          { type: "dialogue", character: "JAY", line: "Look at this version." },
          { type: "dialogue", character: "WITNESS", line: "They're different." },
          { type: "dialogue", character: "JAY", line: "Exactly." },
          { type: "dialogue", character: "WITNESS", line: "Maybe someone edited it." },
          { type: "dialogue", character: "JAY", line: "That's what I'm thinking." },
          { type: "dialogue", character: "WITNESS", line: "Why would someone do that?" },
          { type: "dialogue", character: "JAY", line: "I don't know." },
          { type: "action", text: "Jay looks at screen." },
          { type: "dialogue", character: "JAY", line: "But everyone believed the edited version." },
          { type: "cut", text: "CUT." }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "The Investigation",
    scene: "Scenes 12–13",
    estTime: "1m 10s",
    location: "Computer lab",
    actors: ["Jay", "Journalist", "Witness"],
    wardrobe: [
      { character: "Jay", outfit: "Same detective/student attire as Clip 7 for continuity." },
      { character: "Journalist", outfit: "Campus press / journalism outfit (press ID/lanyard, collared shirt or blazer, notebook/pen in pocket)." },
      { character: "Witness", outfit: "Modest school uniform or neutral jacket (nervous body language)." }
    ],
    elements: [
      {
        type: "shot",
        label: "Scene 12 – Computer Lab",
        content: [
          { type: "action", text: "Jay searches laptop. Journalist enters." },
          { type: "dialogue", character: "JOURNALIST", line: "You're still investigating the Alex Reyes story?" },
          { type: "dialogue", character: "JAY", line: "Something doesn't make sense." },
          { type: "dialogue", character: "JOURNALIST", line: "The whole internet already knows what happened." },
          { type: "dialogue", character: "JAY", line: "That's the problem." },
          { type: "dialogue", character: "JOURNALIST", line: "What problem?" },
          { type: "action", text: "Jay shows two videos." },
          { type: "dialogue", character: "JAY", line: "Everyone thinks they know the story." },
          { type: "dialogue", character: "JAY", line: "But nobody checked the original." }
        ]
      },
      {
        type: "shot",
        label: "Scene 13 – The Witness Arrives",
        content: [
          { type: "action", text: "Witness enters." },
          { type: "dialogue", character: "WITNESS", line: "Jay." },
          { type: "dialogue", character: "JAY", line: "What?" },
          { type: "dialogue", character: "WITNESS", line: "I was there that day." },
          { type: "dialogue", character: "JAY", line: "You were actually there?" },
          { type: "dialogue", character: "WITNESS", line: "Yes." },
          { type: "dialogue", character: "JAY", line: "Then tell me what happened." },
          { type: "action", text: "Next shot: Witness watches original video." },
          { type: "dialogue", character: "WITNESS", line: "That's the original." },
          { type: "dialogue", character: "JAY", line: "This part was removed." }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "The Truth Is Published",
    scene: "Scene 14",
    estTime: "45s",
    location: "Computer lab / media room",
    actors: ["Jay"],
    wardrobe: [
      { character: "Jay", outfit: "Sleeves rolled up, focused posture, headphones around neck to show long research hours." }
    ],
    elements: [
      {
        type: "shot",
        label: "Shot 1 – Over-the-shoulder",
        content: [
          { type: "action", text: "Jay types." },
          {
            type: "insert",
            label: "Article Headline",
            lines: ["THE ALEX REYES VIDEO: WHAT THE VIRAL CLIP LEFT OUT"]
          },
          {
            type: "insert",
            label: "Investigation Evidence List",
            lines: [
              "• ORIGINAL VIDEO TIMELINE",
              "• TIMESTAMPS",
              "• WITNESS STATEMENT",
              "• EDITED VS. ORIGINAL"
            ]
          },
          { type: "action", text: "Jay takes a breath." }
        ]
      },
      {
        type: "shot",
        label: "Shot 2 – Close-up",
        content: [
          { type: "action", text: "Mouse clicks: PUBLISH" },
          { type: "action", text: "Immediately: BUZZ. BUZZ. BUZZ." },
          { type: "action", text: "Phones start receiving notifications." },
          { type: "cut", text: "CUT." }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "People Find Out",
    scene: "Scene 15",
    estTime: "1m 00s",
    location: "Hallway / cafeteria",
    actors: ["Fan 1", "Fan 2", "Fan 3", "Hater 1", "Hater 2", "Neutral User", "Social Media User"],
    wardrobe: [
      { character: "Hallway crowd", outfit: "Everyday campus outfits / uniform (contrast from earlier confident reaction to guilt-ridden posture)." }
    ],
    elements: [
      {
        type: "shot",
        label: "Scene 15 – Group Reactions",
        content: [
          { type: "action", text: "Fan 1 looks at phone." },
          { type: "dialogue", character: "FAN 1", line: "Wait..." },
          { type: "dialogue", character: "FAN 2", line: "What?" },
          { type: "dialogue", character: "FAN 1", line: "The viral version was edited." },
          { type: "dialogue", character: "FAN 3", line: "We didn't know the whole story." },
          { type: "action", text: "Hater 1 looks uncomfortable." },
          { type: "dialogue", character: "HATER 1", line: "I shared it." },
          { type: "dialogue", character: "HATER 2", line: "So did I." },
          { type: "dialogue", character: "NEUTRAL USER", line: "That's why we should have checked first." },
          { type: "action", text: "Social Media User looks at old post." },
          { type: "dialogue", character: "SOCIAL MEDIA USER", line: "We all wanted an answer." },
          { type: "action", text: "Pause." },
          { type: "dialogue", character: "SOCIAL MEDIA USER", line: "But we never waited for one." },
          { type: "cut", text: "CUT." }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Alex's Return",
    scene: "Scene 16",
    estTime: "1m 45s",
    location: "Quiet classroom",
    actors: ["Alex", "Host"],
    wardrobe: [
      { character: "Alex", outfit: "Matured, clean & grounded look: simple minimalist neutral polo/knit shirt (e.g. cream, beige, or navy). No loud celebrity jewelry." },
      { character: "Host", outfit: "Warm, respectful semi-formal (blazer or buttoned shirt, calm demeanor)." }
    ],
    elements: [
      {
        type: "shot",
        label: "Scene 16 – The Interview (Medium two-shot)",
        content: [
          { type: "action", text: "Camera: Medium two-shot. Simple lang, walang audience." },
          { type: "dialogue", character: "HOST", line: "It's been several months since you disappeared from the public eye." },
          { type: "action", text: "Alex nods." },
          { type: "dialogue", character: "HOST", line: "How are you now?" },
          { type: "dialogue", character: "ALEX", line: "I'm getting better." },
          { type: "dialogue", character: "HOST", line: "What was the hardest part?" },
          { type: "action", text: "Alex pauses." },
          { type: "dialogue", character: "ALEX", line: "It wasn't just the video." },
          { type: "action", text: "Host listens." },
          { type: "dialogue", character: "ALEX", line: "It was watching people decide who I was without ever asking me." },
          { type: "action", text: "Pause." },
          { type: "dialogue", character: "HOST", line: "The truth eventually came out." },
          { type: "dialogue", character: "ALEX", line: "Yes." },
          { type: "dialogue", character: "HOST", line: "Do you forgive the people who judged you?" },
          { type: "action", text: "Alex thinks." },
          { type: "dialogue", character: "ALEX", line: "I don't know." },
          { type: "action", text: "Pause." },
          { type: "dialogue", character: "ALEX", line: "Maybe forgiveness takes time." },
          { type: "dialogue", character: "HOST", line: "What do you want people to learn from what happened?" },
          { type: "action", text: "Alex looks directly at camera." },
          { type: "dialogue", character: "ALEX", line: "Don't believe everything you see online." },
          { type: "dialogue", character: "ALEX", line: "Ask questions." },
          { type: "dialogue", character: "ALEX", line: "Check the source." },
          { type: "dialogue", character: "ALEX", line: "And remember that there's a real person behind the screen." },
          { type: "cut", text: "CUT." }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Before You Share",
    scene: "Scene 17",
    estTime: "1m 15s",
    location: "School hallway",
    actors: ["Social Media User", "Alex", "Mia"],
    wardrobe: [
      { character: "Social Media User", outfit: "Regular student streetwear (hoodie or jacket, sneakers)." },
      { character: "Alex", outfit: "Bright, peaceful casual outfit (light-colored shirt/jacket, walking with confidence)." },
      { character: "Mia", outfit: "Supportive friend/manager casual (cardigan/denim jacket, walking alongside Alex)." }
    ],
    elements: [
      {
        type: "shot",
        label: "Shot 1 – Close-up phone",
        content: [
          {
            type: "insert",
            label: "Social Post",
            lines: ['“LOOK WHAT THIS PERSON DID!”']
          },
          { type: "action", text: "Finger is about to press SHARE." }
        ]
      },
      {
        type: "shot",
        label: "Shot 2 – Close-up",
        content: [
          { type: "action", text: "Finger stops. They look at the source." },
          { type: "action", text: "Instead of Share, they press: READ MORE" },
          { type: "action", text: "They begin checking the information." }
        ]
      },
      {
        type: "shot",
        label: "Shot 3 – Wide shot",
        content: [
          { type: "action", text: "Alex walks through hallway. Mia walks beside Alex." },
          { type: "dialogue", character: "MIA", line: "Ready?" },
          { type: "action", text: "Alex looks ahead." },
          { type: "dialogue", character: "ALEX", line: "Yeah." },
          { type: "action", text: "They walk forward." }
        ]
      },
      {
        type: "shot",
        label: "Final Sequence – Black Screen",
        content: [
          { type: "action", text: "Final black screen. Text appears one by one:" },
          {
            type: "endtext",
            lines: [
              "BEFORE YOU SHARE",
              "“Before you judge, know the whole story.”",
              "“Before you share, check.”",
              "“Because behind every viral story is a real person.”"
            ]
          },
          { type: "cut", text: "FADE OUT." }
        ]
      }
    ]
  }
];

const CHECKLIST_ITEMS = [
  "Script reviewed",
  "Actors ready",
  "Location ready",
  "Props ready",
  "Filming completed",
  "Footage reviewed"
];

// ─── LocalStorage Management ───────────────────
const STORAGE_KEY = "filmClipTracker";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn("Failed to load saved state:", err);
  }
  const defaultState = {};
  CLIPS.forEach((clip) => {
    defaultState[clip.id] = {
      status: "not-started",
      checklist: Array(CHECKLIST_ITEMS.length).fill(false)
    };
  });
  return defaultState;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateUrlWithSyncData();
  } catch (err) {
    console.warn("Failed to save state:", err);
  }
}

let state = loadState();
let activeFilter = "all";
let searchQuery = "";

// ─── URL Sync Engine ───────────────────────────
function encodeStatePayload(s) {
  try {
    return encodeURIComponent(btoa(JSON.stringify(s)));
  } catch (e) {
    return "";
  }
}

function decodeStatePayload(str) {
  try {
    const jsonStr = atob(decodeURIComponent(str));
    return JSON.parse(jsonStr);
  } catch (e) {
    return null;
  }
}

function updateUrlWithSyncData() {
  const syncPayload = encodeStatePayload(state);
  if (!syncPayload) return;

  const url = new URL(window.location.href);
  url.searchParams.set("sync", syncPayload);
  window.history.replaceState({}, "", url.toString());
}

function checkAndLoadSyncFromURL() {
  const params = new URLSearchParams(window.location.search);
  const syncParam = params.get("sync");

  if (syncParam) {
    const importedState = decodeStatePayload(syncParam);
    if (importedState && typeof importedState === "object") {
      state = importedState;
      saveState();
      showToast("Progress successfully synced from link!", "success");
    }
  }
}

function getShareableSyncLink() {
  const syncPayload = encodeStatePayload(state);
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?sync=${syncPayload}`;
}

// ─── Toast Notifications ───────────────────────
let toastTimer = null;
function showToast(message, type = "normal") {
  const toastEl = document.getElementById("toast");
  if (!toastEl) return;

  toastEl.textContent = message;
  toastEl.className = "toast show";
  if (type === "success") {
    toastEl.classList.add("toast--success");
  }

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 3500);
}

// ─── Deadline Countdown Timer (Split Boxes) ────
// Target: October 20, 2026, 11:30 PM (23:30:00)
const TARGET_DEADLINE = new Date("2026-10-20T23:30:00");

function updateCountdown() {
  const cdDays  = document.getElementById("cdDays");
  const cdHours = document.getElementById("cdHours");
  const cdMins  = document.getElementById("cdMins");
  const cdSecs  = document.getElementById("cdSecs");
  if (!cdDays) return;

  const now = new Date();
  const diff = TARGET_DEADLINE.getTime() - now.getTime();

  if (diff <= 0) {
    cdDays.textContent  = "00";
    cdHours.textContent = "00";
    cdMins.textContent  = "00";
    cdSecs.textContent  = "00";
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins  = Math.floor((diff / (1000 * 60)) % 60);
  const secs  = Math.floor((diff / 1000) % 60);

  cdDays.textContent  = String(days).padStart(2, "0");
  cdHours.textContent = String(hours).padStart(2, "0");
  cdMins.textContent  = String(mins).padStart(2, "0");
  cdSecs.textContent  = String(secs).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ─── DOM References ────────────────────────────
const clipsGrid         = document.getElementById("clipsGrid");
const totalEl           = document.getElementById("totalClips");
const completedEl       = document.getElementById("completedClips");
const inProgressEl      = document.getElementById("inProgressClips");
const remainingEl       = document.getElementById("remainingClips");
const progressPctEl     = document.getElementById("progressPercent");
const progressBarEl     = document.getElementById("progressBar");
const progressRatioEl   = document.getElementById("progressRatio");

const filterBtns        = document.querySelectorAll(".filter-btn");
const searchInput       = document.getElementById("searchInput");
const copySyncBtn       = document.getElementById("copySyncBtn");

const badgeAll          = document.getElementById("badgeAll");
const badgeNotStarted   = document.getElementById("badgeNotStarted");
const badgeInProgress   = document.getElementById("badgeInProgress");
const badgeCompleted    = document.getElementById("badgeCompleted");

const modalOverlay      = document.getElementById("modalOverlay");
const modalClipNum      = document.getElementById("modalClipNum");
const modalSceneNum     = document.getElementById("modalSceneNum");
const modalTitle        = document.getElementById("modalTitle");
const modalClose        = document.getElementById("modalClose");
const scriptMeta        = document.getElementById("scriptMeta");
const wardrobeSection   = document.getElementById("wardrobeSection");
const scriptShots       = document.getElementById("scriptShots");
const checklistList     = document.getElementById("checklistList");
const checklistProg     = document.getElementById("checklistProgress");
const checklistBarEl    = document.getElementById("checklistBar");

// ─── Helpers ───────────────────────────────────
function escapeHTML(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function formatStatus(status) {
  switch (status) {
    case "not-started": return "Not Started";
    case "in-progress": return "In Progress";
    case "completed":   return "Completed";
    default:            return status;
  }
}

// ─── Stats Calculation & Filter Badges ─────────
function updateStats() {
  const total = CLIPS.length;
  let notStarted = 0;
  let completed = 0;
  let inProgress = 0;

  CLIPS.forEach((clip) => {
    const st = state[clip.id]?.status || "not-started";
    if (st === "completed") completed++;
    else if (st === "in-progress") inProgress++;
    else notStarted++;
  });

  const remaining = total - completed;
  const pct = Math.round((completed / total) * 100);

  totalEl.textContent       = total;
  completedEl.textContent   = completed;
  inProgressEl.textContent  = inProgress;
  remainingEl.textContent   = remaining;
  progressPctEl.textContent = `${pct}%`;
  progressBarEl.style.width = `${pct}%`;
  if (progressRatioEl) progressRatioEl.textContent = `${completed} of ${total} complete`;

  // Update filter pill badges
  if (badgeAll) badgeAll.textContent = total;
  if (badgeNotStarted) badgeNotStarted.textContent = notStarted;
  if (badgeInProgress) badgeInProgress.textContent = inProgress;
  if (badgeCompleted) badgeCompleted.textContent = completed;
}

// ─── Render Clip Cards ─────────────────────────
function renderCards() {
  clipsGrid.innerHTML = "";

  const q = searchQuery.trim().toLowerCase();

  const filteredClips = CLIPS.filter((clip) => {
    const matchesStatus = (activeFilter === "all") || (state[clip.id]?.status === activeFilter);
    if (!matchesStatus) return false;

    if (!q) return true;

    const inTitle    = clip.title.toLowerCase().includes(q);
    const inScene    = clip.scene.toLowerCase().includes(q);
    const inLocation = clip.location.toLowerCase().includes(q);
    const inActors   = clip.actors.some(a => a.toLowerCase().includes(q));

    return inTitle || inScene || inLocation || inActors;
  });

  if (filteredClips.length === 0) {
    clipsGrid.innerHTML = `
      <div class="clips-grid__empty">
        <p>No clips found matching your filters.</p>
      </div>
    `;
    return;
  }

  filteredClips.forEach((clip) => {
    const clipState = state[clip.id] || { status: "not-started", checklist: [] };
    const card = document.createElement("div");
    card.className = `clip-card clip-card--${clipState.status}`;

    // Wardrobe summary snippet for card
    const wardrobeSnippet = clip.wardrobe && clip.wardrobe.length
      ? clip.wardrobe.map(w => `${w.character}: ${w.outfit}`).join(" • ")
      : "";

    card.innerHTML = `
      <div class="clip-card__top-row">
        <span class="clip-card__number">CLIP ${String(clip.id).padStart(2, "0")}</span>
        <span class="clip-card__est-time">${ICONS.clock} ${clip.estTime}</span>
      </div>
      <h3 class="clip-card__title">${escapeHTML(clip.title)}</h3>
      <div class="clip-card__scene-tag">${escapeHTML(clip.scene)}</div>
      <div class="clip-card__wardrobe-preview" title="Ano bagay isuot">
        ${ICONS.shirt} <strong>Attire:</strong> ${escapeHTML(wardrobeSnippet)}
      </div>
      <span class="clip-card__status clip-card__status--${clipState.status}">
        <span class="clip-card__status-dot"></span>
        ${formatStatus(clipState.status)}
      </span>
      <div class="clip-card__controls">
        <select class="clip-card__select" data-id="${clip.id}" aria-label="Change status for ${escapeHTML(clip.title)}">
          <option value="not-started" ${clipState.status === "not-started" ? "selected" : ""}>Not Started</option>
          <option value="in-progress" ${clipState.status === "in-progress" ? "selected" : ""}>In Progress</option>
          <option value="completed"   ${clipState.status === "completed" ? "selected" : ""}>Completed</option>
        </select>
        <button class="clip-card__btn" data-id="${clip.id}">View Script →</button>
      </div>
    `;

    clipsGrid.appendChild(card);
  });

  // Attach card event listeners
  clipsGrid.querySelectorAll(".clip-card__select").forEach((sel) => {
    sel.addEventListener("change", handleStatusChange);
  });

  clipsGrid.querySelectorAll(".clip-card__btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.dataset.id);
      openModal(id);
    });
  });
}

function handleStatusChange(e) {
  const clipId = Number(e.target.dataset.id);
  const newStatus = e.target.value;

  if (state[clipId]) {
    state[clipId].status = newStatus;
    saveState();
    updateStats();
    renderCards();
    showToast(`Clip ${clipId} marked as "${formatStatus(newStatus)}".`, "success");
  }
}

// ─── Search & Filter Events ────────────────────
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderCards();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderCards();
  });
}

// ─── Copy Sync Link Button ─────────────────────
if (copySyncBtn) {
  copySyncBtn.addEventListener("click", async () => {
    const link = getShareableSyncLink();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        const tempInput = document.createElement("input");
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      showToast("Sync link copied! Open this on your other device to sync.", "success");
    } catch (err) {
      prompt("Copy this link to open on another device:", link);
    }
  });
}

// ─── Script Viewer Modal ───────────────────────
let currentModalClipId = null;

function renderScriptElements(elements) {
  let html = "";

  elements.forEach((el) => {
    if (el.type === "part") {
      html += `<div class="part-header">${escapeHTML(el.label)}</div>`;
      if (el.content && el.content.length) {
        html += renderScriptElements(el.content);
      }
    } else if (el.type === "shot") {
      html += `<div class="shot-block">`;
      if (el.label) {
        html += `<div class="shot-block__label">${escapeHTML(el.label)}</div>`;
      }
      if (el.content && el.content.length) {
        html += renderScriptElements(el.content);
      }
      html += `</div>`;
    } else if (el.type === "action") {
      html += `<p class="action-text">${escapeHTML(el.text)}</p>`;
    } else if (el.type === "dialogue") {
      html += `
        <div class="dialogue">
          <div class="dialogue__character">${escapeHTML(el.character)}</div>
          <div class="dialogue__line">“${escapeHTML(el.line)}”</div>
        </div>
      `;
    } else if (el.type === "insert") {
      html += `
        <div class="insert-block">
          <div class="insert-block__label">${escapeHTML(el.label)}</div>
          ${el.lines.map((l) => `<div>${escapeHTML(l)}</div>`).join("")}
        </div>
      `;
    } else if (el.type === "endtext") {
      html += `<div class="end-text">`;
      el.lines.forEach((l, idx) => {
        const cls = idx === 0 ? "end-text__line end-text__line--big" : "end-text__line";
        html += `<div class="${cls}">${escapeHTML(l)}</div>`;
      });
      html += `</div>`;
    } else if (el.type === "cut") {
      html += `<div class="cut-indicator">${escapeHTML(el.text)}</div>`;
    }
  });

  return html;
}

function openModal(clipId) {
  currentModalClipId = clipId;
  const clip = CLIPS.find((c) => c.id === clipId);
  if (!clip) return;

  modalClipNum.textContent = `CLIP ${String(clip.id).padStart(2, "0")}`;
  modalSceneNum.textContent = clip.scene;
  modalTitle.textContent = clip.title;

  // Metadata tags (Location, Actors, Est Runtime)
  scriptMeta.innerHTML = `
    <div class="script-meta__tag">
      <span class="script-meta__tag-icon">${ICONS.clock}</span>
      <span>Est. Clip Length: <strong>${escapeHTML(clip.estTime)}</strong></span>
    </div>
    <div class="script-meta__tag">
      <span class="script-meta__tag-icon">${ICONS.pin}</span>
      <span>${escapeHTML(clip.location)}</span>
    </div>
    <div class="script-meta__tag">
      <span class="script-meta__tag-icon">${ICONS.users}</span>
      <span>${escapeHTML(clip.actors.join(", "))}</span>
    </div>
  `;

  // Wardrobe / Kasuotan (Ano Bagay Isuot)
  if (clip.wardrobe && clip.wardrobe.length > 0) {
    let wardrobeHTML = `
      <div class="wardrobe-section__title">
        <span>${ICONS.shirt}</span> Ano ang Bagay Isuot (Wardrobe / Costume Guide)
      </div>
      <ul class="wardrobe-section__list">
    `;
    clip.wardrobe.forEach((w) => {
      wardrobeHTML += `
        <li class="wardrobe-section__item">
          <span class="wardrobe-section__char">${escapeHTML(w.character)}:</span>
          <span>${escapeHTML(w.outfit)}</span>
        </li>
      `;
    });
    wardrobeHTML += `</ul>`;
    wardrobeSection.innerHTML = wardrobeHTML;
    wardrobeSection.style.display = "block";
  } else {
    wardrobeSection.style.display = "none";
  }

  // Shots / dialogue rendering
  scriptShots.innerHTML = renderScriptElements(clip.elements);

  // Render checklist
  renderChecklist(clipId);

  // Show modal
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
  currentModalClipId = null;
}

// ─── Checklist Management ──────────────────────
function renderChecklist(clipId) {
  const clipState = state[clipId] || { checklist: [] };
  const checks = clipState.checklist;
  checklistList.innerHTML = "";

  CHECKLIST_ITEMS.forEach((label, idx) => {
    const isChecked = !!checks[idx];
    const li = document.createElement("li");
    li.className = `checklist__item ${isChecked ? "checklist__item--done" : ""}`;

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = `modal-check-${clipId}-${idx}`;
    cb.checked = isChecked;

    cb.addEventListener("change", () => {
      state[clipId].checklist[idx] = cb.checked;
      saveState();
      li.classList.toggle("checklist__item--done", cb.checked);
      updateChecklistProgress(clipId);
    });

    const lbl = document.createElement("label");
    lbl.htmlFor = cb.id;
    lbl.textContent = label;

    li.appendChild(cb);
    li.appendChild(lbl);
    checklistList.appendChild(li);
  });

  updateChecklistProgress(clipId);
}

function updateChecklistProgress(clipId) {
  const clipState = state[clipId] || { checklist: [] };
  const doneCount = clipState.checklist.filter(Boolean).length;
  const totalCount = CHECKLIST_ITEMS.length;
  const pct = Math.round((doneCount / totalCount) * 100);

  checklistProg.textContent = `${doneCount} / ${totalCount} tasks completed`;
  checklistBarEl.style.width = `${pct}%`;
}

// ─── Modal Close Listeners ─────────────────────
modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
    closeModal();
  }
});

// ─── Initialize ────────────────────────────────
checkAndLoadSyncFromURL();
updateStats();
renderCards();
updateUrlWithSyncData();
