const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;
const CONTENT = {
  "catalogue": {
    "departments": [{
      "id": "front-office",
      "name": {
        "en": "Front Office",
        "th": "แผนกต้อนรับส่วนหน้า"
      }
    }, {
      "id": "food-beverage",
      "name": {
        "en": "Food & Beverage",
        "th": "แผนกอาหารและเครื่องดื่ม"
      }
    }, {
      "id": "housekeeping",
      "name": {
        "en": "Housekeeping",
        "th": "แผนกแม่บ้าน"
      }
    }, {
      "id": "kitchen",
      "name": {
        "en": "Kitchen",
        "th": "แผนกครัว"
      }
    }, {
      "id": "engineering",
      "name": {
        "en": "Engineering",
        "th": "แผนกช่าง"
      }
    }, {
      "id": "reservations",
      "name": {
        "en": "Reservations",
        "th": "แผนกสำรองห้องพัก"
      }
    }, {
      "id": "customer-relations",
      "name": {
        "en": "Customer Relations",
        "th": "แผนกลูกค้าสัมพันธ์"
      }
    }, {
      "id": "spa",
      "name": {
        "en": "Spa",
        "th": "แผนกสปา"
      }
    }, {
      "id": "retail",
      "name": {
        "en": "Retail",
        "th": "แผนกร้านค้า"
      }
    }, {
      "id": "it",
      "name": {
        "en": "IT",
        "th": "แผนกไอที"
      }
    }, {
      "id": "human-resources",
      "name": {
        "en": "Human Resources",
        "th": "แผนกทรัพยากรบุคคล"
      }
    }],
    "roles": {
      "fo-guest-service-agent": {
        "en": "Guest Service Agent",
        "th": "พนักงานบริการส่วนหน้า"
      },
      "fo-airport-representative": {
        "en": "Airport Representative",
        "th": "พนักงานต้อนรับสนามบิน"
      },
      "fo-service-center": {
        "en": "Service Center",
        "th": "พนักงานศูนย์บริการ"
      },
      "fo-bellboy": {
        "en": "Bellboy",
        "th": "พนักงานยกกระเป๋า"
      },
      "fo-operator": {
        "en": "Operator",
        "th": "พนักงานรับโทรศัพท์"
      },
      "fo-tour-counter": {
        "en": "Tour Counter",
        "th": "เคาน์เตอร์ทัวร์"
      },
      "fb-restaurant-service": {
        "en": "Restaurant & Room Service",
        "th": "บริการห้องอาหารและรูมเซอร์วิส"
      },
      "fb-bar-service": {
        "en": "Bar",
        "th": "พนักงานบาร์"
      },
      "fb-activity-kids-club": {
        "en": "Activity & Kids Club",
        "th": "กิจกรรมและคิดส์คลับ"
      },
      "fb-pool-attendant": {
        "en": "Pool Attendant",
        "th": "พนักงานดูแลสระว่ายน้ำ"
      },
      "fb-cashier": {
        "en": "Cashier",
        "th": "แคชเชียร์"
      },
      "hk-room-attendant": {
        "en": "Room Attendant",
        "th": "พนักงานทำความสะอาดห้องพัก"
      },
      "hk-area-cleaner": {
        "en": "Area Cleaner",
        "th": "พนักงานทำความสะอาดพื้นที่"
      },
      "hk-gardener": {
        "en": "Gardener",
        "th": "พนักงานดูแลสวน"
      },
      "kt-kitchen": {
        "en": "Kitchen",
        "th": "พนักงานครัว"
      },
      "eng-maintenance": {
        "en": "Maintenance Technician",
        "th": "ช่างซ่อมบำรุง"
      },
      "rs-reservations": {
        "en": "Reservations",
        "th": "พนักงานสำรองห้องพัก"
      },
      "cr-customer-relations": {
        "en": "Customer Relations",
        "th": "พนักงานลูกค้าสัมพันธ์"
      },
      "sp-spa-therapist": {
        "en": "Spa Therapist",
        "th": "นักบำบัดสปา"
      },
      "rt-minimart": {
        "en": "Minimart",
        "th": "มินิมาร์ท"
      },
      "rt-shop": {
        "en": "Shop",
        "th": "ร้านค้า"
      },
      "it-support": {
        "en": "IT Support",
        "th": "ฝ่ายสนับสนุนไอที"
      },
      "hr-officer": {
        "en": "HR Officer",
        "th": "เจ้าหน้าที่ทรัพยากรบุคคล"
      }
    },
    "properties": [{
      "id": "sands",
      "assignments": [{
        "department": "front-office",
        "role": "fo-guest-service-agent"
      }, {
        "department": "front-office",
        "role": "fo-airport-representative"
      }, {
        "department": "front-office",
        "role": "fo-service-center"
      }, {
        "department": "front-office",
        "role": "fo-bellboy"
      }, {
        "department": "front-office",
        "role": "fo-operator"
      }, {
        "department": "front-office",
        "role": "fo-tour-counter"
      }, {
        "department": "food-beverage",
        "role": "fb-restaurant-service"
      }, {
        "department": "food-beverage",
        "role": "fb-bar-service"
      }, {
        "department": "food-beverage",
        "role": "fb-activity-kids-club"
      }, {
        "department": "food-beverage",
        "role": "fb-pool-attendant"
      }, {
        "department": "food-beverage",
        "role": "fb-cashier"
      }, {
        "department": "housekeeping",
        "role": "hk-room-attendant"
      }, {
        "department": "housekeeping",
        "role": "hk-area-cleaner"
      }, {
        "department": "housekeeping",
        "role": "hk-gardener"
      }, {
        "department": "kitchen",
        "role": "kt-kitchen"
      }, {
        "department": "engineering",
        "role": "eng-maintenance"
      }, {
        "department": "reservations",
        "role": "rs-reservations"
      }, {
        "department": "customer-relations",
        "role": "cr-customer-relations"
      }, {
        "department": "spa",
        "role": "sp-spa-therapist"
      }, {
        "department": "retail",
        "role": "rt-minimart",
        "labelOverride": {
          "en": "Melon Minimart",
          "th": "เมล่อน มินิมาร์ท"
        }
      }, {
        "department": "it",
        "role": "it-support"
      }, {
        "department": "human-resources",
        "role": "hr-officer"
      }]
    }, {
      "id": "little-shore",
      "assignments": [{
        "department": "front-office",
        "role": "fo-guest-service-agent",
        "labelOverride": {
          "en": "Resort Host",
          "th": "รีสอร์ทโฮสต์"
        }
      }, {
        "department": "front-office",
        "role": "fo-bellboy"
      }, {
        "department": "food-beverage",
        "role": "fb-restaurant-service"
      }, {
        "department": "food-beverage",
        "role": "fb-bar-service"
      }, {
        "department": "food-beverage",
        "role": "fb-pool-attendant",
        "labelOverride": {
          "en": "Pool Attendant & Activity",
          "th": "พนักงานดูแลสระและกิจกรรม"
        }
      }, {
        "department": "food-beverage",
        "role": "rt-shop",
        "labelOverride": {
          "en": "Shop",
          "th": "ร้านค้า"
        }
      }, {
        "department": "housekeeping",
        "role": "hk-room-attendant"
      }, {
        "department": "housekeeping",
        "role": "hk-area-cleaner"
      }, {
        "department": "housekeeping",
        "role": "hk-gardener"
      }, {
        "department": "kitchen",
        "role": "kt-kitchen"
      }, {
        "department": "engineering",
        "role": "eng-maintenance"
      }]
    }]
  },
  "properties": {
    "little-shore": {
      "id": "little-shore",
      "name": {
        "en": "The Little Shore Khao Lak",
        "th": "เดอะ ลิตเทิล ชอร์ เขาหลัก"
      },
      "brand": "Katathani Collection",
      "vars": {
        "property.name": "The Little Shore",
        "property.rooms": "FILL ME",
        "outlet.signature": "FILL ME",
        "outlet.signature.pitch": "FILL ME — one sentence a waiter can say to sell it",
        "outlet.buffet": "FILL ME — or remove if there is no buffet",
        "outlet.poolBar": "FILL ME",
        "outlet.bars": "FILL ME",
        "outlet.shop": "FILL ME",
        "buffet.showNights": "FILL ME",
        "buffet.showTime": "FILL ME",
        "bar.happyHour": "FILL ME",
        "charge.corkage": "FILL ME",
        "local.market": "Bang Niang market",
        "local.marketDays": "Monday, Wednesday, Thursday and Saturday",
        "local.marketHours": "2 to 9 p.m.",
        "local.museum": "the Tsunami Museum"
      }
    },
    "sands": {
      "id": "sands",
      "name": {
        "en": "The Sands Khao Lak",
        "th": "เดอะ แซนด์ส เขาหลัก"
      },
      "brand": "Katathani Collection",
      "vars": {
        "property.name": "The Sands",
        "property.rooms": "439",
        "outlet.signature": "Talay",
        "outlet.signature.pitch": "right on the beach, with live music and a fresh seafood display",
        "outlet.buffet": "Floating Market",
        "outlet.poolBar": "Coconut Pool Bar",
        "outlet.bars": "the Pineapple Bar and the Mango Bar",
        "outlet.shop": "Melon Minimart",
        "buffet.showNights": "Tuesday, Thursday and Saturday",
        "buffet.showTime": "7:30 p.m.",
        "bar.happyHour": "4:30 to 6:00 p.m.",
        "charge.corkage": "300 baht",
        "local.market": "Bang Niang market",
        "local.marketDays": "Monday, Wednesday, Thursday and Saturday",
        "local.marketHours": "2 to 9 p.m.",
        "local.museum": "the Tsunami Museum"
      }
    }
  },
  "roles": {
    "core-service-standard": {
      "id": "core-service-standard",
      "name": {
        "en": "The Way We Speak",
        "th": "วิธีที่เราพูดกับลูกค้า"
      },
      "kind": "core",
      "appliesTo": "guest-facing",
      "units": [{
        "id": "core-magic-words",
        "name": {
          "en": "Magic Words",
          "th": "คำวิเศษ"
        },
        "questions": [{
          "type": "choice",
          "scene": "A guest asks you for something you can do.",
          "sceneTh": "ลูกค้าขอบางอย่างที่คุณทำให้ได้",
          "ask": "What is the first word out of your mouth?",
          "askTh": "คำแรกที่คุณจะพูดคืออะไร",
          "options": [{
            "t": "Certainly, sir.",
            "th": "ได้ค่ะ",
            "v": "best",
            "n": "Certainly is the magic word. The guest hears yes before anything else.",
            "nTh": "Certainly คือคำวิเศษ ลูกค้าได้ยินคำตอบรับก่อนอย่างอื่น"
          }, {
            "t": "OK.",
            "th": "โอเค",
            "v": "ok",
            "n": "You agreed, but it sounds like effort. Certainly sounds like pleasure.",
            "nTh": "คุณตอบตกลง แต่ฟังดูเหมือนฝืน Certainly ฟังดูเหมือนยินดี"
          }, {
            "t": "Wait.",
            "th": "รอก่อน",
            "v": "bad",
            "n": "Never open by making a guest wait.",
            "nTh": "ห้ามเปิดด้วยการให้ลูกค้ารอ"
          }, {
            "t": "Why?",
            "th": "ทำไม",
            "v": "bad",
            "n": "Never ask a guest to justify a request.",
            "nTh": "ห้ามให้ลูกค้าอธิบายเหตุผลที่ขอ"
          }]
        }]
      }, {
        "id": "core-sensitive-words",
        "name": {
          "en": "Words We Never Say",
          "th": "คำที่เราไม่พูด"
        },
        "questions": [{
          "type": "choice",
          "scene": "A guest asks for something the hotel does not allow.",
          "sceneTh": "ลูกค้าขอบางอย่างที่โรงแรมไม่อนุญาต",
          "ask": "You cannot say yes. What do you say?",
          "askTh": "คุณตอบตกลงไม่ได้ คุณจะพูดอย่างไร",
          "options": [{
            "t": "I am sorry, I am afraid I cannot do that myself. May I ask my supervisor if we can arrange something for you?",
            "th": "ขอโทษค่ะ ดิฉันเกรงว่าจะทำเองไม่ได้ ขออนุญาตไปสอบถามหัวหน้าให้คุณนะคะ",
            "v": "best",
            "n": "Never a bare no. Take it upward — the guest sees someone fighting for them.",
            "nTh": "อย่าปฏิเสธเปล่า ๆ ให้ส่งต่อหัวหน้า ลูกค้าจะเห็นว่ามีคนพยายามช่วยเขา"
          }, {
            "t": "I am sorry, it is our hotel policy.",
            "th": "ขอโทษค่ะ เป็นนโยบายของโรงแรม",
            "v": "ok",
            "n": "True — but 'policy' is a wall. Offer to ask.",
            "nTh": "จริง แต่คำว่านโยบายคือกำแพง ให้เสนอไปถาม"
          }, {
            "t": "No. It is the rule.",
            "th": "ไม่ได้ค่ะ เป็นกฎ",
            "v": "bad",
            "n": "'It is the rule' ends the conversation and starts a review.",
            "nTh": "คำว่ามันเป็นกฎ จบบทสนทนา และเริ่มต้นรีวิวแย่ ๆ"
          }, {
            "t": "You must follow the rules.",
            "th": "คุณต้องทำตามกฎ",
            "v": "bad",
            "n": "'You must' is never said to a guest.",
            "nTh": "ห้ามพูดคำว่า คุณต้อง กับลูกค้า"
          }]
        }]
      }, {
        "id": "core-apology",
        "name": {
          "en": "When We Are Wrong",
          "th": "เมื่อเราผิด"
        },
        "questions": [{
          "type": "choice",
          "scene": "Something has gone wrong and it is the hotel's fault.",
          "sceneTh": "มีบางอย่างผิดพลาด และเป็นความผิดของโรงแรม",
          "ask": "Three things must be in your answer. Which one has all three?",
          "askTh": "คำตอบต้องมีสามสิ่ง ข้อไหนมีครบทั้งสาม",
          "options": [{
            "t": "I am terribly sorry. This is our mistake. Let me fix it for you right away — I will take care of it myself.",
            "th": "ดิฉันขอโทษจริง ๆ ค่ะ เป็นความผิดพลาดของเรา ขออนุญาตแก้ไขให้คุณทันที ดิฉันจะจัดการเองค่ะ",
            "v": "best",
            "n": "Apologise. Own it. Say what YOU will do. Then go and do it.",
            "nTh": "ขอโทษ ยอมรับ บอกว่าคุณจะทำอะไร แล้วไปทำจริง ๆ"
          }, {
            "t": "I am terribly sorry about that.",
            "th": "ดิฉันขอโทษจริง ๆ ค่ะ",
            "v": "ok",
            "n": "The apology is right, but nothing is being fixed. An apology without an action is just noise.",
            "nTh": "ขอโทษถูกแล้ว แต่ยังไม่มีการแก้ไข การขอโทษที่ไม่มีการกระทำก็ไร้ความหมาย"
          }, {
            "t": "I am sorry, it was not my department.",
            "th": "ขอโทษค่ะ ไม่ใช่แผนกของดิฉัน",
            "v": "bad",
            "n": "Never blame another department in front of a guest. To the guest, you ARE the hotel.",
            "nTh": "ห้ามโทษแผนกอื่นต่อหน้าลูกค้า สำหรับลูกค้า คุณคือโรงแรม"
          }, {
            "t": "I am sorry, but you did not tell us before.",
            "th": "ขอโทษค่ะ แต่คุณไม่ได้บอกเราก่อน",
            "v": "bad",
            "n": "Never turn it into the guest's mistake, even when it is.",
            "nTh": "ห้ามทำให้กลายเป็นความผิดของลูกค้า แม้ว่ามันจะเป็นเช่นนั้นจริง"
          }]
        }]
      }]
    },
    "eng-maintenance": {
      "id": "eng-maintenance",
      "name": {
        "en": "Maintenance Technician",
        "th": "ช่างซ่อมบำรุง"
      },
      "guestFacing": true,
      "source": "Authored for Katathani Lingo — pending the Engineering English Manual",
      "inherits": ["core-service-standard"],
      "units": [{
        "id": "door",
        "name": {
          "en": "At the Guest's Door",
          "th": "ที่หน้าห้องพัก"
        },
        "questions": [{
          "type": "choice",
          "scene": "Reception sends you to fix the air-conditioning in Room 312. The guest is inside. You reach the door.",
          "sceneTh": "แผนกต้อนรับส่งคุณไปซ่อมแอร์ที่ห้อง 312 ลูกค้าอยู่ในห้อง คุณมาถึงหน้าประตู",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "Knock three times. \"Good afternoon, maintenance. May I come in to check your air-conditioning?\"",
            "th": "เคาะประตูสามครั้ง แล้วพูดว่า \"สวัสดีค่ะ ช่างซ่อมบำรุงค่ะ ขออนุญาตเข้าไปตรวจแอร์ให้นะคะ\"",
            "v": "best",
            "n": "Knock, say who you are, say why, and ask to come in. Never just walk in.",
            "nTh": "เคาะประตู บอกว่าคุณเป็นใคร บอกเหตุผล แล้วขออนุญาตเข้า ห้ามเดินเข้าไปเฉย ๆ"
          }, {
            "t": "Knock. \"Maintenance.\"",
            "th": "เคาะประตู แล้วพูดว่า \"ช่างค่ะ\"",
            "v": "ok",
            "n": "Right idea, but too bare. Add the greeting and ask permission to enter.",
            "nTh": "ถูกทาง แต่ห้วนไป เพิ่มคำทักทายและขออนุญาตเข้าห้องด้วย"
          }, {
            "t": "Open the door with your key and go in.",
            "th": "ใช้กุญแจเปิดประตูแล้วเข้าไปเลย",
            "v": "bad",
            "n": "The guest is inside. Entering without asking frightens them and breaks their trust.",
            "nTh": "ลูกค้าอยู่ในห้อง การเข้าไปโดยไม่ขอทำให้ลูกค้าตกใจและเสียความไว้ใจ"
          }, {
            "t": "Knock hard and shout \"Room service!\"",
            "th": "เคาะแรง ๆ แล้วตะโกนว่า \"รูมเซอร์วิส!\"",
            "v": "bad",
            "n": "You are not room service, and shouting is not how we knock on a guest's door.",
            "nTh": "คุณไม่ใช่รูมเซอร์วิส และการตะโกนไม่ใช่วิธีเคาะประตูห้องลูกค้า"
          }]
        }, {
          "type": "choice",
          "scene": "The guest opens the door but does not step back to let you in.",
          "sceneTh": "ลูกค้าเปิดประตูแต่ยังไม่ถอยให้คุณเข้า",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"May I come in, sir? I will be as quick as I can.\"",
            "th": "\"ขออนุญาตเข้าไปนะคะ ดิฉันจะรีบทำให้เร็วที่สุดค่ะ\"",
            "v": "best",
            "n": "Ask again, gently, and reassure them you will not take long. May I is the magic word.",
            "nTh": "ขออนุญาตอีกครั้งอย่างสุภาพ และบอกว่าจะรีบทำ May I คือคำวิเศษ"
          }, {
            "t": "\"I need to come in now.\"",
            "th": "\"ผมต้องเข้าไปเดี๋ยวนี้ครับ\"",
            "v": "bad",
            "n": "Never tell a guest what you need. Ask, do not demand.",
            "nTh": "ห้ามสั่งลูกค้าว่าคุณต้องการอะไร ให้ขอ ไม่ใช่บังคับ"
          }, {
            "t": "Wait silently until the guest moves.",
            "th": "ยืนเงียบ ๆ รอจนกว่าลูกค้าจะขยับ",
            "v": "ok",
            "n": "Polite, but the guest may not know what you want. Say it kindly.",
            "nTh": "สุภาพ แต่ลูกค้าอาจไม่รู้ว่าคุณต้องการอะไร พูดออกมาอย่างนุ่มนวล"
          }, {
            "t": "\"Excuse me, move please.\"",
            "th": "\"ขอโทษครับ หลบหน่อยครับ\"",
            "v": "bad",
            "n": "'Move' is an order you give a thing, not a guest. It sounds rude in English.",
            "nTh": "'Move' เป็นคำสั่งที่ใช้กับสิ่งของ ไม่ใช่ลูกค้า ฟังดูหยาบในภาษาอังกฤษ"
          }]
        }, {
          "type": "guest",
          "scene": "You knock and the guest opens the door in a bathrobe, clearly just out of the shower.",
          "sceneTh": "คุณเคาะประตู ลูกค้าเปิดออกมาในชุดคลุมอาบน้ำ เพิ่งอาบน้ำเสร็จ",
          "guest": {
            "en": "Oh — can you come back later? I've just got out of the shower.",
            "th": "อ๋อ — กลับมาใหม่ทีหลังได้ไหม ฉันเพิ่งอาบน้ำเสร็จ"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Of course, madam. I am sorry to disturb you. May I come back in twenty minutes?\"",
            "th": "\"ได้เลยค่ะ ต้องขอโทษที่รบกวนนะคะ ขออนุญาตกลับมาใหม่ในอีกยี่สิบนาทีได้ไหมคะ\"",
            "v": "best",
            "n": "Agree at once, apologise for disturbing, and offer a clear time. Never make a guest feel rushed.",
            "nTh": "ตกลงทันที ขอโทษที่รบกวน และเสนอเวลาที่ชัดเจน อย่าทำให้ลูกค้ารู้สึกถูกเร่ง"
          }, {
            "t": "\"Okay. Bye.\"",
            "th": "\"โอเคค่ะ บายค่ะ\"",
            "v": "ok",
            "n": "You agreed, but you left no plan. When will you come back? Tell them.",
            "nTh": "คุณตกลงแล้ว แต่ไม่ได้นัดเวลา คุณจะกลับมาเมื่อไหร่ บอกลูกค้าด้วย"
          }, {
            "t": "\"It is fast, only five minutes.\"",
            "th": "\"เร็วมากค่ะ แค่ห้านาที\"",
            "v": "bad",
            "n": "The guest asked you to come back. Pressing to enter now ignores what they said.",
            "nTh": "ลูกค้าขอให้กลับมาใหม่ การรบเร้าจะเข้าตอนนี้คือการไม่ฟังลูกค้า"
          }, {
            "t": "Say nothing and walk away.",
            "th": "ไม่พูดอะไรแล้วเดินจากไป",
            "v": "bad",
            "n": "Leaving without a word is not service. Acknowledge, apologise, and set a time.",
            "nTh": "เดินจากไปเงียบ ๆ ไม่ใช่การบริการ ต้องรับคำ ขอโทษ และนัดเวลา"
          }]
        }, {
          "type": "choice",
          "scene": "You enter the room to fix the TV. The guest's laptop and papers are spread across the desk near the socket you need.",
          "sceneTh": "คุณเข้าไปในห้องเพื่อซ่อมทีวี โน้ตบุ๊กและเอกสารของลูกค้าวางอยู่เต็มโต๊ะใกล้ปลั๊กที่คุณต้องใช้",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Excuse me, may I move your laptop to the side for a moment? I will put it back.\"",
            "th": "\"ขอโทษนะคะ ขออนุญาตขยับโน้ตบุ๊กของคุณไปด้านข้างสักครู่ได้ไหมคะ เดี๋ยวดิฉันวางคืนให้ค่ะ\"",
            "v": "best",
            "n": "Never touch a guest's things without asking. Ask, then promise to put it back.",
            "nTh": "ห้ามแตะของลูกค้าโดยไม่ขอ ขอก่อน แล้วสัญญาว่าจะวางคืน"
          }, {
            "t": "Move the laptop yourself and start working.",
            "th": "ขยับโน้ตบุ๊กเองแล้วเริ่มทำงาน",
            "v": "bad",
            "n": "That is the guest's property. Touching it without asking can end very badly.",
            "nTh": "นั่นคือทรัพย์สินของลูกค้า การแตะโดยไม่ขออาจจบไม่สวย"
          }, {
            "t": "\"Please move your things.\"",
            "th": "\"ช่วยเก็บของด้วยครับ\"",
            "v": "ok",
            "n": "Better than touching it, but it puts the work on the guest. Offer to move it for them, carefully.",
            "nTh": "ดีกว่าไปแตะเอง แต่เป็นการผลักภาระให้ลูกค้า เสนอขยับให้เองอย่างระมัดระวัง"
          }, {
            "t": "Work around the papers and hope nothing falls.",
            "th": "ทำงานเลี่ยง ๆ เอกสาร แล้วหวังว่าจะไม่มีอะไรตก",
            "v": "bad",
            "n": "If something breaks or spills, it is on you. Clear the space properly, with permission.",
            "nTh": "ถ้ามีอะไรพังหรือหก คุณต้องรับผิดชอบ เคลียร์พื้นที่ให้เรียบร้อยโดยขออนุญาต"
          }]
        }, {
          "type": "choice",
          "scene": "A 'Do Not Disturb' sign hangs on Room 508, but the room below is flooding from a leak that traces to 508's bathroom. It is urgent.",
          "sceneTh": "ป้าย 'ห้ามรบกวน' แขวนอยู่ที่ห้อง 508 แต่ห้องข้างล่างน้ำท่วมจากท่อรั่วที่มาจากห้องน้ำของ 508 เรื่องด่วน",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Call the room by phone first: explain there is a leak affecting the room below and ask permission to come in.",
            "th": "โทรเข้าห้องก่อน อธิบายว่ามีท่อรั่วกระทบห้องข้างล่าง แล้วขออนุญาตเข้าไป",
            "v": "best",
            "n": "Respect the sign, but the leak cannot wait. Phone first — that honours the sign and the emergency.",
            "nTh": "เคารพป้าย แต่ท่อรั่วรอไม่ได้ โทรก่อน เป็นการเคารพทั้งป้ายและเหตุด่วน"
          }, {
            "t": "Ignore the sign and knock loudly — it is an emergency.",
            "th": "ไม่สนป้ายแล้วเคาะแรง ๆ เพราะเป็นเหตุด่วน",
            "v": "ok",
            "n": "The urgency is real, but barging past a DND sign should be a call first, then reception if there is no answer.",
            "nTh": "เรื่องด่วนจริง แต่การฝ่าป้ายห้ามรบกวนควรโทรก่อน ถ้าไม่รับค่อยแจ้งแผนกต้อนรับ"
          }, {
            "t": "Wait until the guest removes the sign.",
            "th": "รอจนกว่าลูกค้าจะเอาป้ายออก",
            "v": "bad",
            "n": "Water is pouring into another room now. Waiting turns one problem into two.",
            "nTh": "น้ำกำลังไหลลงอีกห้องเดี๋ยวนี้ การรอทำให้ปัญหาเดียวกลายเป็นสองปัญหา"
          }, {
            "t": "Let yourself in quietly with your key so you don't disturb them.",
            "th": "ใช้กุญแจเข้าไปเงียบ ๆ เพื่อไม่ให้รบกวนลูกค้า",
            "v": "bad",
            "n": "Entering behind a DND sign with no contact will frighten the guest and can cost you your job.",
            "nTh": "การเข้าห้องที่ติดป้ายห้ามรบกวนโดยไม่ติดต่อทำให้ลูกค้าตกใจและอาจทำให้คุณตกงาน"
          }]
        }, {
          "type": "choice",
          "scene": "Reception gives you key access to fix a lamp while the guest is out for the day.",
          "sceneTh": "แผนกต้อนรับให้กุญแจเข้าไปซ่อมโคมไฟขณะที่ลูกค้าออกไปข้างนอกทั้งวัน",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Knock and announce yourself first, then enter, and leave a card saying maintenance was here and what you did.",
            "th": "เคาะและบอกตัวตนก่อน แล้วค่อยเข้า และวางการ์ดบอกว่าช่างเข้ามาซ่อมอะไรบ้าง",
            "v": "best",
            "n": "Knock even when you think it is empty, and leave a note. The guest should never be surprised someone was in their room.",
            "nTh": "เคาะแม้คิดว่าห้องว่าง และวางโน้ตไว้ ลูกค้าไม่ควรแปลกใจที่มีคนเข้าห้อง"
          }, {
            "t": "Enter quietly, fix it, and leave without a trace.",
            "th": "เข้าเงียบ ๆ ซ่อมเสร็จแล้วออกไปโดยไม่ทิ้งร่องรอย",
            "v": "ok",
            "n": "The repair is fine, but a guest who learns someone was in their room with no note feels uneasy. Leave a card.",
            "nTh": "ซ่อมก็เรียบร้อย แต่ลูกค้าที่รู้ทีหลังว่ามีคนเข้าห้องโดยไม่มีโน้ตจะรู้สึกไม่สบายใจ วางการ์ดไว้"
          }, {
            "t": "Go through the guest's things to find a better bulb.",
            "th": "รื้อของลูกค้าเพื่อหาหลอดไฟที่ดีกว่า",
            "v": "bad",
            "n": "Never touch or search a guest's belongings. You are there for the lamp, nothing else.",
            "nTh": "ห้ามแตะหรือรื้อของลูกค้า คุณมาซ่อมโคมไฟ ไม่ใช่อย่างอื่น"
          }, {
            "t": "Bring a friend in to help pass the time.",
            "th": "ชวนเพื่อนเข้ามาเป็นเพื่อนแก้เบื่อ",
            "v": "bad",
            "n": "Only authorised staff enter a guest's room, and only for the job. Never bring anyone else.",
            "nTh": "เฉพาะพนักงานที่ได้รับอนุญาตเท่านั้นที่เข้าห้องลูกค้าได้ และเข้าเพื่องานเท่านั้น ห้ามพาใครเข้าไป"
          }]
        }, {
          "type": "choice",
          "scene": "You knock for the third time. No answer, but you can clearly hear the shower running inside.",
          "sceneTh": "คุณเคาะเป็นครั้งที่สาม ไม่มีใครตอบ แต่ได้ยินเสียงฝักบัวเปิดอยู่ในห้องชัดเจน",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Do not enter. Leave and come back later, or leave a note asking them to call when convenient.",
            "th": "อย่าเข้า ออกไปแล้วกลับมาใหม่ หรือวางโน้ตขอให้ลูกค้าโทรกลับเมื่อสะดวก",
            "v": "best",
            "n": "Someone is in the shower. Entering now is the worst thing you can do. Come back later.",
            "nTh": "มีคนอาบน้ำอยู่ การเข้าไปตอนนี้คือสิ่งที่แย่ที่สุด กลับมาใหม่ทีหลัง"
          }, {
            "t": "Enter anyway — you did knock three times.",
            "th": "เข้าไปเลย เพราะคุณเคาะสามครั้งแล้ว",
            "v": "bad",
            "n": "Knocking does not give you permission when you can hear they cannot answer. Never enter.",
            "nTh": "การเคาะไม่ใช่การได้รับอนุญาต ในเมื่อได้ยินว่าลูกค้ามารับไม่ได้ ห้ามเข้าเด็ดขาด"
          }, {
            "t": "Wait outside the door until the shower stops.",
            "th": "ยืนรอหน้าประตูจนกว่าเสียงฝักบัวจะหยุด",
            "v": "ok",
            "n": "Not harmful, but standing outside a guest's door is uncomfortable for them. Better to return later.",
            "nTh": "ไม่ได้เป็นอันตราย แต่การยืนรอหน้าประตูทำให้ลูกค้าอึดอัด กลับมาใหม่ดีกว่า"
          }, {
            "t": "Knock much harder so they hear you over the water.",
            "th": "เคาะแรงขึ้นอีกมากเพื่อให้ได้ยินเสียงคุณกลบเสียงน้ำ",
            "v": "bad",
            "n": "Pounding on the door of someone in the shower is alarming. Leave them be.",
            "nTh": "การทุบประตูใส่คนที่กำลังอาบน้ำทำให้ตกใจ ปล่อยเขาไว้เถอะ"
          }]
        }]
      }, {
        "id": "problem",
        "name": {
          "en": "Understanding the Problem",
          "th": "เข้าใจปัญหา"
        },
        "questions": [{
          "type": "guest",
          "scene": "You are in the room. You need to know exactly what is wrong before you open anything.",
          "sceneTh": "คุณอยู่ในห้องแล้ว คุณต้องรู้ว่าปัญหาคืออะไรแน่ ๆ ก่อนจะเริ่มเปิดอะไร",
          "guest": {
            "en": "The air-conditioning isn't working.",
            "th": "แอร์ไม่ทำงานเลย"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I see. Is it not cold, or is it not turning on at all?\"",
            "th": "\"เข้าใจค่ะ มันไม่เย็น หรือว่าเปิดไม่ติดเลยคะ\"",
            "v": "best",
            "n": "One kind question saves you twenty minutes. Find out which problem it is before you start.",
            "nTh": "คำถามดี ๆ หนึ่งคำถามช่วยประหยัดเวลายี่สิบนาที หาให้เจอว่าเป็นปัญหาแบบไหนก่อนเริ่ม"
          }, {
            "t": "\"Okay, I will check it.\"",
            "th": "\"ได้ค่ะ เดี๋ยวดิฉันตรวจดูให้\"",
            "v": "ok",
            "n": "Fine, but you learned nothing. A quick question first tells you where to look.",
            "nTh": "ก็โอเค แต่คุณยังไม่รู้อะไรเลย ถามสั้น ๆ ก่อนจะช่วยให้รู้ว่าต้องดูตรงไหน"
          }, {
            "t": "\"The air-con here is always a problem.\"",
            "th": "\"แอร์ที่นี่มีปัญหาประจำเลยค่ะ\"",
            "v": "bad",
            "n": "Never tell a guest the hotel's equipment is bad. Fix it, do not complain about it.",
            "nTh": "ห้ามบอกลูกค้าว่าอุปกรณ์ของโรงแรมไม่ดี ซ่อมมัน ไม่ใช่บ่นเรื่องมัน"
          }, {
            "t": "\"Are you sure you turned it on?\"",
            "th": "\"คุณแน่ใจนะคะว่าเปิดแล้ว\"",
            "v": "bad",
            "n": "This sounds like you are blaming the guest. Ask about the fault, not about them.",
            "nTh": "ฟังดูเหมือนโทษลูกค้า ถามเรื่องอาการเสีย ไม่ใช่เรื่องตัวลูกค้า"
          }]
        }, {
          "type": "guest",
          "scene": "The guest is describing a problem with the bathroom.",
          "sceneTh": "ลูกค้ากำลังอธิบายปัญหาในห้องน้ำ",
          "guest": {
            "en": "There's no hot water in the shower this morning.",
            "th": "เช้านี้น้ำในฝักบัวไม่ร้อนเลย"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I am sorry about that. Let me check it now — may I run the shower to see?\"",
            "th": "\"ต้องขอโทษด้วยนะคะ เดี๋ยวดิฉันตรวจให้เลยค่ะ ขออนุญาตเปิดฝักบัวดูได้ไหมคะ\"",
            "v": "best",
            "n": "Apologise, act, and ask before you use their bathroom. All three, briefly.",
            "nTh": "ขอโทษ ลงมือทำ และขอก่อนใช้ห้องน้ำของลูกค้า ครบสามอย่างแบบสั้น ๆ"
          }, {
            "t": "\"Sometimes it takes a long time to get hot.\"",
            "th": "\"บางทีก็ใช้เวลานานกว่าจะร้อนค่ะ\"",
            "v": "bad",
            "n": "That is an excuse, not a fix. Do not explain the problem away — go and check it.",
            "nTh": "นั่นคือข้อแก้ตัว ไม่ใช่การซ่อม อย่าอธิบายให้ปัญหาหายไป ให้ไปตรวจ"
          }, {
            "t": "\"I will check the water heater.\"",
            "th": "\"เดี๋ยวดิฉันจะไปตรวจเครื่องทำน้ำร้อนค่ะ\"",
            "v": "ok",
            "n": "Good action, but you skipped the sorry. A word of apology first costs nothing.",
            "nTh": "ลงมือดี แต่ลืมขอโทษ คำขอโทษก่อนไม่เสียอะไรเลย"
          }, {
            "t": "\"Every room is like this today.\"",
            "th": "\"วันนี้ทุกห้องเป็นเหมือนกันหมดค่ะ\"",
            "v": "bad",
            "n": "Even if true, this tells the guest the whole hotel is broken. Never say it.",
            "nTh": "ต่อให้จริง ก็เท่ากับบอกลูกค้าว่าโรงแรมพังทั้งหมด ห้ามพูด"
          }]
        }, {
          "type": "choice",
          "scene": "You have found the fault: a blocked drain under the sink. The guest asks what was wrong.",
          "sceneTh": "คุณเจอสาเหตุแล้ว ท่อใต้อ่างอุดตัน ลูกค้าถามว่าเสียตรงไหน",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"The drain was blocked, sir. I have cleared it — the water runs freely now.\"",
            "th": "\"ท่อน้ำอุดตันค่ะ ดิฉันทะลวงออกแล้ว ตอนนี้น้ำไหลสะดวกแล้วค่ะ\"",
            "v": "best",
            "n": "Say what was wrong in plain words, and tell them it is fixed. Clear and calm.",
            "nTh": "บอกอาการเสียด้วยคำง่าย ๆ และบอกว่าซ่อมเรียบร้อยแล้ว ชัดเจนและใจเย็น"
          }, {
            "t": "\"The P-trap had a siphon blockage in the outlet pipe.\"",
            "th": "\"ตัวพีแทร็ปมีการอุดตันแบบไซฟอนที่ท่อทางออกค่ะ\"",
            "v": "ok",
            "n": "All true, but the guest is not a plumber. Use words a guest understands.",
            "nTh": "จริงทั้งหมด แต่ลูกค้าไม่ใช่ช่างประปา ใช้คำที่ลูกค้าเข้าใจ"
          }, {
            "t": "\"Nothing. It is fine now.\"",
            "th": "\"ไม่มีอะไรค่ะ ตอนนี้ปกติแล้ว\"",
            "v": "bad",
            "n": "The guest asked a question. Brushing it off feels like you are hiding something.",
            "nTh": "ลูกค้าถามคำถาม การปัดตกทำให้รู้สึกเหมือนคุณปิดบังอะไรบางอย่าง"
          }, {
            "t": "\"Guests put too much down the sink.\"",
            "th": "\"ลูกค้าชอบทิ้งของลงอ่างมากเกินไปค่ะ\"",
            "v": "bad",
            "n": "Never blame the guest, even gently. Just say what you fixed.",
            "nTh": "ห้ามโทษลูกค้า แม้จะพูดเบา ๆ แค่บอกว่าคุณซ่อมอะไร"
          }]
        }, {
          "type": "guest",
          "scene": "The guest is upset — this is the second time they have called about the same TV.",
          "sceneTh": "ลูกค้าไม่พอใจ นี่เป็นครั้งที่สองที่โทรมาเรื่องทีวีเครื่องเดิม",
          "guest": {
            "en": "This is the second time today. Why does nobody fix it properly?",
            "th": "นี่ครั้งที่สองแล้ววันนี้ ทำไมไม่มีใครซ่อมให้เรียบร้อยสักที"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I am sorry you have had to call twice. I will replace the TV now so this stops for good.\"",
            "th": "\"ต้องขอโทษที่ทำให้คุณต้องโทรมาสองครั้งนะคะ ดิฉันจะเปลี่ยนทีวีให้ใหม่เลยค่ะ จะได้จบปัญหานี้ไปเลย\"",
            "v": "best",
            "n": "Own the repeat, apologise for it, and give a fix that ends the problem — not another patch.",
            "nTh": "รับเรื่องที่ต้องซ่อมซ้ำ ขอโทษ และให้การแก้ที่จบปัญหา ไม่ใช่ซ่อมชั่วคราวอีกรอบ"
          }, {
            "t": "\"It was fixed before. I don't know why it broke again.\"",
            "th": "\"เมื่อกี้ซ่อมแล้วนะคะ ไม่รู้ทำไมมันเสียอีก\"",
            "v": "bad",
            "n": "'I don't know' leaves the guest with nothing. Never say it — say what you will do.",
            "nTh": "'ไม่รู้' ทำให้ลูกค้าไม่เหลืออะไรเลย ห้ามพูด ให้บอกว่าคุณจะทำอะไร"
          }, {
            "t": "\"I am sorry. Let me look at it again.\"",
            "th": "\"ขอโทษค่ะ ขอดูอีกครั้งนะคะ\"",
            "v": "ok",
            "n": "The apology is right, but 'look again' is what failed last time. Offer a real solution.",
            "nTh": "ขอโทษถูกแล้ว แต่ 'ดูอีกครั้ง' คือสิ่งที่ล้มเหลวเมื่อกี้ เสนอทางแก้จริง ๆ"
          }, {
            "t": "\"That is not my fault, the other technician came.\"",
            "th": "\"ไม่ใช่ความผิดผมนะครับ ช่างคนก่อนมาต่างหาก\"",
            "v": "bad",
            "n": "The guest does not care who came. To them, you are the hotel. Own it.",
            "nTh": "ลูกค้าไม่สนว่าใครมา สำหรับเขาคุณคือโรงแรม รับผิดชอบไป"
          }]
        }, {
          "type": "guest",
          "scene": "The guest speaks very little English. They point at the air-conditioner and look frustrated.",
          "sceneTh": "ลูกค้าพูดอังกฤษได้น้อยมาก ชี้ไปที่แอร์และดูหงุดหงิด",
          "guest": {
            "en": "No... cold. No cold.",
            "th": "ไม่... เย็น ไม่เย็น"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Smile, point at the air-con and say slowly, \"Not cold? I check now. One minute.\" Use simple words and your hands.",
            "th": "ยิ้ม ชี้ไปที่แอร์ แล้วพูดช้า ๆ ว่า \"ไม่เย็นใช่ไหม เดี๋ยวตรวจให้เลย หนึ่งนาที\" ใช้คำง่าย ๆ และมือช่วย",
            "v": "best",
            "n": "With little shared language, short words and gestures win. Slow and simple, not louder or longer.",
            "nTh": "เมื่อภาษาไม่ตรงกัน คำสั้น ๆ กับท่าทางได้ผล ช้าและง่าย ไม่ใช่ดังขึ้นหรือยาวขึ้น"
          }, {
            "t": "Speak a long, full English sentence, hoping they catch some of it.",
            "th": "พูดประโยคอังกฤษยาว ๆ เต็ม ๆ หวังว่าลูกค้าจะจับใจความได้บ้าง",
            "v": "bad",
            "n": "A long sentence to someone with little English just loses them. Keep it to a few clear words.",
            "nTh": "ประโยคยาว ๆ กับคนที่พูดอังกฤษได้น้อยยิ่งทำให้งง ใช้คำชัด ๆ ไม่กี่คำ"
          }, {
            "t": "Speak the same English but much louder.",
            "th": "พูดอังกฤษเหมือนเดิมแต่เสียงดังขึ้นมาก",
            "v": "bad",
            "n": "Louder is not clearer. It only makes the guest feel small. Slow down and use gestures.",
            "nTh": "ดังขึ้นไม่ได้ชัดขึ้น มีแต่ทำให้ลูกค้ารู้สึกแย่ พูดช้าลงและใช้ท่าทาง"
          }, {
            "t": "Call reception and hand the guest the phone to explain.",
            "th": "โทรหาแผนกต้อนรับแล้วยื่นโทรศัพท์ให้ลูกค้าอธิบายเอง",
            "v": "ok",
            "n": "A translator can help for something complex — but for 'not cold' you can handle it yourself with a few words.",
            "nTh": "ล่ามช่วยได้ถ้าเรื่องซับซ้อน แต่แค่ 'ไม่เย็น' คุณจัดการเองได้ด้วยคำไม่กี่คำ"
          }]
        }, {
          "type": "guest",
          "scene": "The guest reports the in-room safe is locked shut and will not open. Their passport is inside.",
          "sceneTh": "ลูกค้าแจ้งว่าตู้เซฟในห้องล็อกและเปิดไม่ออก หนังสือเดินทางอยู่ข้างใน",
          "guest": {
            "en": "The safe won't open and my passport is in there. I'm getting worried.",
            "th": "ตู้เซฟเปิดไม่ออก แล้วพาสปอร์ตฉันอยู่ข้างในนั้น เริ่มกังวลแล้ว"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I understand, sir — we will get it open. For your security, may I see your ID first, then I will unlock it for you.\"",
            "th": "\"เข้าใจค่ะ เดี๋ยวเราเปิดให้ได้แน่นอน เพื่อความปลอดภัยของคุณ ขอดูบัตรประจำตัวก่อนนะคะ แล้วดิฉันจะเปิดให้ค่ะ\"",
            "v": "best",
            "n": "Reassure them, then follow the security rule — confirm identity before opening a safe. Both matter.",
            "nTh": "ทำให้ลูกค้าสบายใจ แล้วทำตามกฎความปลอดภัย ยืนยันตัวตนก่อนเปิดเซฟ สำคัญทั้งคู่"
          }, {
            "t": "Open the safe straight away — they are clearly the guest.",
            "th": "เปิดเซฟให้เลย เพราะเห็นชัดว่าเป็นลูกค้า",
            "v": "bad",
            "n": "'Clearly the guest' is not proof. Checking ID before opening a safe protects them and you.",
            "nTh": "'เห็นชัดว่าเป็นลูกค้า' ไม่ใช่หลักฐาน การตรวจบัตรก่อนเปิดเซฟปกป้องทั้งลูกค้าและคุณ"
          }, {
            "t": "\"You must go to reception to sort this out.\"",
            "th": "\"คุณต้องไปที่แผนกต้อนรับเพื่อจัดการเรื่องนี้ค่ะ\"",
            "v": "bad",
            "n": "'You must' sends a worried guest away. You can open it — verify ID and help them here.",
            "nTh": "'คุณต้อง' คือการไล่ลูกค้าที่กำลังกังวล คุณเปิดได้ ตรวจบัตรแล้วช่วยที่นี่เลย"
          }, {
            "t": "\"Safes do this sometimes, don't worry about it.\"",
            "th": "\"เซฟเป็นแบบนี้บ่อย ๆ ค่ะ ไม่ต้องกังวล\"",
            "v": "ok",
            "n": "A little reassuring, but their passport is locked away. Act, don't just soothe.",
            "nTh": "ปลอบได้นิดหน่อย แต่พาสปอร์ตยังถูกล็อกอยู่ ลงมือทำ ไม่ใช่แค่ปลอบ"
          }]
        }, {
          "type": "guest",
          "scene": "The guest complains the Wi-Fi is slow. That is IT's area, not yours.",
          "sceneTh": "ลูกค้าบ่นว่าไวไฟช้า นั่นเป็นงานของไอที ไม่ใช่ของคุณ",
          "guest": {
            "en": "The internet is so slow I can't do any work. Can you fix it?",
            "th": "อินเทอร์เน็ตช้ามากจนทำงานไม่ได้เลย ช่วยแก้ให้หน่อยได้ไหม"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I am sorry about that. I will report it to our IT team right away and ask them to call you within a few minutes.\"",
            "th": "\"ต้องขอโทษด้วยค่ะ ดิฉันจะแจ้งทีมไอทีทันที และให้เขาโทรหาคุณภายในไม่กี่นาทีนะคะ\"",
            "v": "best",
            "n": "Not your job, but never say that. Own it, pass it to the right team, and give the guest a next step.",
            "nTh": "ไม่ใช่งานคุณ แต่ห้ามพูดแบบนั้น รับเรื่อง ส่งต่อทีมที่ถูกต้อง และบอกลูกค้าว่าจะเกิดอะไรต่อ"
          }, {
            "t": "\"That is not my department. I only do maintenance.\"",
            "th": "\"ไม่ใช่แผนกผมครับ ผมทำแต่งานซ่อมบำรุง\"",
            "v": "bad",
            "n": "'Not my department' is a phrase we never say. To the guest, you are the hotel.",
            "nTh": "'ไม่ใช่แผนกผม' คือคำที่เราไม่พูด สำหรับลูกค้าคุณคือโรงแรม"
          }, {
            "t": "Try to fix the Wi-Fi router yourself even though it is not your field.",
            "th": "พยายามซ่อมเราเตอร์ไวไฟเองทั้งที่ไม่ใช่สายงาน",
            "v": "bad",
            "n": "Working on kit you do not know can make it worse. Route it to IT — that helps the guest fastest.",
            "nTh": "ไปยุ่งกับอุปกรณ์ที่ไม่ชำนาญอาจทำให้แย่ลง ส่งต่อไอทีช่วยลูกค้าได้เร็วที่สุด"
          }, {
            "t": "\"You can try turning it off and on yourself.\"",
            "th": "\"ลองปิดแล้วเปิดใหม่เองดูได้นะคะ\"",
            "v": "ok",
            "n": "A fair tip, but you are handing the guest the work. Report it and let IT follow up.",
            "nTh": "เป็นคำแนะนำที่พอได้ แต่เป็นการโยนงานให้ลูกค้า แจ้งเรื่องแล้วให้ไอทีตามต่อ"
          }]
        }]
      }, {
        "id": "work",
        "name": {
          "en": "While You Work",
          "th": "ระหว่างซ่อม"
        },
        "questions": [{
          "type": "choice",
          "scene": "To fix the leaking tap you must shut off the water to the room for about ten minutes.",
          "sceneTh": "เพื่อซ่อมก๊อกที่รั่ว คุณต้องปิดน้ำในห้องประมาณสิบนาที",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I need to turn the water off for about ten minutes. Is that all right with you now?\"",
            "th": "\"ดิฉันต้องปิดน้ำประมาณสิบนาทีนะคะ ตอนนี้สะดวกไหมคะ\"",
            "v": "best",
            "n": "Warn the guest before you cut anything off, say how long, and check the timing suits them.",
            "nTh": "เตือนลูกค้าก่อนตัดน้ำหรือไฟ บอกว่านานแค่ไหน และเช็กว่าเวลานี้สะดวกไหม"
          }, {
            "t": "Turn the water off and start. They will notice.",
            "th": "ปิดน้ำแล้วเริ่มเลย เดี๋ยวลูกค้าก็รู้เอง",
            "v": "bad",
            "n": "Cutting the water with no warning is how a guest ends up with soap in their eyes. Always tell them first.",
            "nTh": "ตัดน้ำโดยไม่เตือนคือสาเหตุที่ลูกค้าโดนสบู่เข้าตา ต้องบอกก่อนเสมอ"
          }, {
            "t": "\"I turn off water ten minutes, okay.\"",
            "th": "\"ปิดน้ำสิบนาทีนะครับ โอเค\"",
            "v": "ok",
            "n": "The message gets through, but it is a statement, not a question. Ask if the timing is okay.",
            "nTh": "สื่อสารได้ แต่เป็นการบอก ไม่ใช่การถาม ให้ถามว่าเวลานี้สะดวกไหม"
          }, {
            "t": "\"Don't use the bathroom until I finish.\"",
            "th": "\"อย่าเพิ่งใช้ห้องน้ำจนกว่าผมจะเสร็จนะครับ\"",
            "v": "bad",
            "n": "This orders the guest around in their own room. Explain and ask, do not command.",
            "nTh": "นี่เป็นการสั่งลูกค้าในห้องของเขาเอง อธิบายและขอ ไม่ใช่สั่ง"
          }]
        }, {
          "type": "choice",
          "scene": "The repair is noisy — you need to drill for a minute. The guest is reading nearby.",
          "sceneTh": "งานซ่อมเสียงดัง คุณต้องเจาะสักหนึ่งนาที ลูกค้านั่งอ่านหนังสืออยู่ใกล้ ๆ",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Excuse me, there will be some noise for about a minute. I am sorry for the disturbance.\"",
            "th": "\"ขอโทษนะคะ จะมีเสียงดังประมาณหนึ่งนาที ต้องขออภัยที่รบกวนค่ะ\"",
            "v": "best",
            "n": "Warn them the noise is coming and apologise for it. A guest forgives noise they were told about.",
            "nTh": "เตือนว่าจะมีเสียงดังและขอโทษ ลูกค้าให้อภัยเสียงที่ได้รับการบอกล่วงหน้า"
          }, {
            "t": "Just start drilling — it is only a minute.",
            "th": "เจาะเลย แค่นาทีเดียวเอง",
            "v": "bad",
            "n": "A sudden loud noise beside a guest is a fright. One sentence of warning prevents it.",
            "nTh": "เสียงดังจู่ ๆ ข้างลูกค้าทำให้ตกใจ ประโยคเตือนเดียวป้องกันได้"
          }, {
            "t": "\"Sorry, noise.\"",
            "th": "\"ขอโทษค่ะ เสียงดัง\"",
            "v": "ok",
            "n": "It warns them, just barely. A full sentence sounds far more professional.",
            "nTh": "เตือนได้แบบเฉียดฉิว ประโยคเต็มฟังดูมืออาชีพกว่ามาก"
          }, {
            "t": "Put your headphones in and drill.",
            "th": "ใส่หูฟังแล้วเจาะ",
            "v": "bad",
            "n": "Protecting only your own ears ignores the guest completely. Warn them first.",
            "nTh": "ป้องกันแต่หูตัวเองคือการไม่สนใจลูกค้าเลย เตือนลูกค้าก่อน"
          }]
        }, {
          "type": "guest",
          "scene": "Halfway through, the guest looks over at the parts on the floor.",
          "sceneTh": "ระหว่างซ่อม ลูกค้ามองมาที่อะไหล่ที่วางอยู่บนพื้น",
          "guest": {
            "en": "Is it going to take much longer? I have to leave at four.",
            "th": "จะอีกนานไหม ฉันต้องออกตอนสี่โมง"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"About ten more minutes, madam. You will be able to leave on time — I will be finished well before four.\"",
            "th": "\"อีกประมาณสิบนาทีค่ะ คุณออกได้ทันแน่นอน ดิฉันจะเสร็จก่อนสี่โมงค่ะ\"",
            "v": "best",
            "n": "Give a real number and answer the worry behind the question — they can still leave on time.",
            "nTh": "ให้ตัวเลขจริง และตอบความกังวลที่ซ่อนอยู่ ว่าลูกค้ายังออกทันเวลา"
          }, {
            "t": "\"Maybe soon.\"",
            "th": "\"เดี๋ยวก็เสร็จค่ะ\"",
            "v": "ok",
            "n": "Too vague to reassure anyone. Give a time they can plan around.",
            "nTh": "คลุมเครือเกินกว่าจะทำให้ลูกค้าสบายใจ ให้เวลาที่ลูกค้าวางแผนได้"
          }, {
            "t": "\"I don't know. These things are hard to say.\"",
            "th": "\"ไม่รู้ค่ะ งานแบบนี้บอกยาก\"",
            "v": "bad",
            "n": "The guest has a deadline. 'I don't know' leaves them stuck. Give your best estimate.",
            "nTh": "ลูกค้ามีเวลานัด 'ไม่รู้' ทำให้เขาค้างเติ่ง ให้เวลาประมาณการที่ดีที่สุด"
          }, {
            "t": "\"If you are busy, you can go and leave me here.\"",
            "th": "\"ถ้าคุณยุ่ง จะออกไปก่อนแล้วปล่อยผมไว้ก็ได้ครับ\"",
            "v": "bad",
            "n": "Never suggest working alone in a guest's room. That is a security rule, not a courtesy.",
            "nTh": "ห้ามเสนอทำงานคนเดียวในห้องลูกค้า นั่นคือกฎความปลอดภัย ไม่ใช่แค่มารยาท"
          }]
        }, {
          "type": "choice",
          "scene": "You accidentally leave a small smudge of grease on the white bathroom counter.",
          "sceneTh": "คุณเผลอทำคราบจาระบีเปื้อนเล็กน้อยบนเคาน์เตอร์ห้องน้ำสีขาว",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Clean it off completely before you leave, and check the floor for any parts or dust.",
            "th": "เช็ดออกให้หมดก่อนออกจากห้อง และตรวจพื้นว่ามีอะไหล่หรือฝุ่นตกหล่นไหม",
            "v": "best",
            "n": "Leave the room cleaner than you found it. A guest judges the whole repair by the mess left behind.",
            "nTh": "ทิ้งห้องให้สะอาดกว่าตอนที่เข้ามา ลูกค้าตัดสินงานซ่อมทั้งหมดจากความสะอาดที่ทิ้งไว้"
          }, {
            "t": "Wipe most of it and leave — housekeeping will get the rest.",
            "th": "เช็ดออกเกือบหมดแล้วไป เดี๋ยวแม่บ้านเก็บที่เหลือเอง",
            "v": "bad",
            "n": "It is your mark, so it is your job. Do not leave your mess for another department.",
            "nTh": "คราบของคุณ ก็หน้าที่ของคุณ อย่าทิ้งความเลอะให้แผนกอื่น"
          }, {
            "t": "Leave it — the guest will not notice.",
            "th": "ปล่อยไว้ ลูกค้าไม่สังเกตหรอก",
            "v": "bad",
            "n": "On a white counter they will. A dirty mark undoes a perfect repair.",
            "nTh": "บนเคาน์เตอร์สีขาว ลูกค้าเห็นแน่ คราบสกปรกทำลายงานซ่อมที่สมบูรณ์แบบ"
          }, {
            "t": "Tell the guest there is a mark for housekeeping to clean.",
            "th": "บอกลูกค้าว่ามีคราบให้แม่บ้านมาเช็ด",
            "v": "ok",
            "n": "Honest, but you are handing the guest your problem. Just clean it yourself.",
            "nTh": "ตรงไปตรงมา แต่เป็นการโยนปัญหาให้ลูกค้า เช็ดเองเลยดีกว่า"
          }]
        }, {
          "type": "choice",
          "scene": "You have most tools but need one part from the workshop. The guest is in the room.",
          "sceneTh": "คุณมีเครื่องมือเกือบครบ แต่ต้องไปเอาอะไหล่หนึ่งชิ้นจากห้องช่าง ลูกค้าอยู่ในห้อง",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I need one part from downstairs — I will be about fifteen minutes. May I leave my toolbox here, or shall I take it with me?\"",
            "th": "\"ดิฉันต้องไปเอาอะไหล่ชิ้นหนึ่งข้างล่าง ประมาณสิบห้านาทีค่ะ ขอวางกล่องเครื่องมือไว้ตรงนี้ หรือให้เอาไปด้วยดีคะ\"",
            "v": "best",
            "n": "Tell them how long, and give them the choice about your tools in their space. Respect the room.",
            "nTh": "บอกว่านานแค่ไหน และให้ลูกค้าเลือกเรื่องเครื่องมือในพื้นที่ของเขา เคารพห้องลูกค้า"
          }, {
            "t": "Leave your tools all over the floor and walk out without a word.",
            "th": "วางเครื่องมือเกลื่อนพื้นแล้วเดินออกไปโดยไม่พูดอะไร",
            "v": "bad",
            "n": "Leaving tools scattered with no word is unsafe and rude. Tell them, and tidy your tools.",
            "nTh": "ทิ้งเครื่องมือเกลื่อนโดยไม่บอกเป็นทั้งอันตรายและเสียมารยาท บอกลูกค้าและเก็บเครื่องมือ"
          }, {
            "t": "\"Wait here, I come back,\" and leave.",
            "th": "\"รอตรงนี้นะ เดี๋ยวมา\" แล้วเดินออกไป",
            "v": "ok",
            "n": "At least you spoke, but 'wait here' orders the guest and gives no time. Say how long and be polite.",
            "nTh": "อย่างน้อยก็พูด แต่ 'รอตรงนี้' เป็นการสั่งลูกค้าและไม่บอกเวลา บอกว่านานแค่ไหนและสุภาพ"
          }, {
            "t": "Take the guest's key card so you can let yourself back in.",
            "th": "เอาคีย์การ์ดของลูกค้าไปเพื่อจะได้กลับเข้ามาเอง",
            "v": "bad",
            "n": "Never take a guest's key. Knock again when you return, like the first time.",
            "nTh": "ห้ามเอาคีย์การ์ดของลูกค้าไป กลับมาก็เคาะใหม่เหมือนครั้งแรก"
          }]
        }, {
          "type": "guest",
          "scene": "You have finished a tricky repair. The pleased guest holds out a 500-baht note.",
          "sceneTh": "คุณซ่อมงานยาก ๆ เสร็จ ลูกค้าพอใจและยื่นแบงก์ห้าร้อยบาทให้",
          "guest": {
            "en": "Here, this is for you. Thank you.",
            "th": "นี่ อันนี้สำหรับคุณ ขอบคุณนะ"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"That is very kind of you, thank you. It was my pleasure to help.\"",
            "th": "\"ใจดีจังเลยค่ะ ขอบคุณค่ะ ดิฉันยินดีที่ได้ช่วยนะคะ\"",
            "v": "best",
            "n": "Accept graciously and warmly, and put the service first. Simple and polite.",
            "nTh": "รับอย่างสุภาพและอบอุ่น และให้การบริการมาก่อน เรียบง่ายและสุภาพ"
          }, {
            "t": "Wave it away firmly: \"No, no, I cannot, take it back.\"",
            "th": "โบกมือปฏิเสธหนักแน่น \"ไม่ ๆ รับไม่ได้ เอาคืนไปเถอะ\"",
            "v": "ok",
            "n": "A firm refusal can embarrass a guest who meant well. A warm thank-you is smoother.",
            "nTh": "การปฏิเสธแข็ง ๆ อาจทำให้ลูกค้าที่หวังดีเขิน คำขอบคุณอบอุ่น ๆ ราบรื่นกว่า"
          }, {
            "t": "\"Only 500? The job was difficult.\"",
            "th": "\"แค่ห้าร้อยเองเหรอครับ งานยากนะ\"",
            "v": "bad",
            "n": "Never comment on the amount. That turns a kind gesture into an insult.",
            "nTh": "ห้ามวิจารณ์จำนวนเงิน นั่นเปลี่ยนน้ำใจให้กลายเป็นการดูถูก"
          }, {
            "t": "Take it silently and pocket it without a word.",
            "th": "รับมาเงียบ ๆ แล้วเก็บใส่กระเป๋าโดยไม่พูดอะไร",
            "v": "ok",
            "n": "Not wrong, but a simple 'thank you' is what makes it gracious.",
            "nTh": "ไม่ผิด แต่คำ 'ขอบคุณ' ง่าย ๆ คือสิ่งที่ทำให้ดูมีน้ำใจ"
          }]
        }]
      }, {
        "id": "cantfix",
        "name": {
          "en": "When You Can't Fix It Now",
          "th": "เมื่อยังซ่อมไม่ได้ตอนนี้"
        },
        "questions": [{
          "type": "choice",
          "scene": "The minibar fridge needs a part you do not have on the trolley. It must be ordered.",
          "sceneTh": "ตู้เย็นมินิบาร์ต้องใช้อะไหล่ที่ไม่มีบนรถเข็น ต้องสั่งของมาก่อน",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I am sorry — this needs a part I don't have with me. I will fetch it and come back by six this evening.\"",
            "th": "\"ต้องขอโทษด้วยค่ะ อันนี้ต้องใช้อะไหล่ที่ดิฉันไม่ได้เอามาด้วย ดิฉันจะไปเอามาและกลับมาซ่อมให้ก่อนหกโมงเย็นนะคะ\"",
            "v": "best",
            "n": "Own it, explain simply, and give a real time you will return. A promise with a time is a promise kept.",
            "nTh": "รับผิดชอบ อธิบายง่าย ๆ และให้เวลาที่จะกลับมาแน่นอน สัญญาที่มีเวลาคือสัญญาที่รักษาได้"
          }, {
            "t": "\"I cannot fix this. It is not my department.\"",
            "th": "\"ผมซ่อมไม่ได้ครับ ไม่ใช่แผนกของผม\"",
            "v": "bad",
            "n": "'Not my department' is a phrase we never say. You are the hotel to this guest — arrange it.",
            "nTh": "'ไม่ใช่แผนกของผม' คือคำที่เราไม่พูดเด็ดขาด สำหรับลูกค้าคุณคือโรงแรม จัดการให้"
          }, {
            "t": "\"I need a part. I will come back sometime.\"",
            "th": "\"ต้องใช้อะไหล่ครับ เดี๋ยวจะกลับมา\"",
            "v": "ok",
            "n": "Honest, but 'sometime' worries a guest. Give a real time and they relax.",
            "nTh": "ตรงไปตรงมา แต่ 'เดี๋ยว' ทำให้ลูกค้ากังวล ให้เวลาชัดเจนแล้วลูกค้าจะสบายใจ"
          }, {
            "t": "\"You will have to wait, I don't know how long.\"",
            "th": "\"คุณต้องรอนะครับ ไม่รู้ว่านานแค่ไหน\"",
            "v": "bad",
            "n": "This gives the guest a problem and no plan. Never leave them with 'I don't know'.",
            "nTh": "นี่คือการยื่นปัญหาให้ลูกค้าโดยไม่มีแผน อย่าทิ้งลูกค้าไว้กับ 'ไม่รู้'"
          }]
        }, {
          "type": "guest",
          "scene": "The repair is beyond you — it needs a specialist contractor. The guest wants an answer.",
          "sceneTh": "งานนี้เกินความสามารถคุณ ต้องใช้ช่างผู้เชี่ยวชาญจากภายนอก ลูกค้าอยากได้คำตอบ",
          "guest": {
            "en": "So can you fix it or not?",
            "th": "ตกลงซ่อมได้หรือไม่ได้"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"This one needs our specialist, sir. Let me arrange it and I will call you within the hour to confirm the time.\"",
            "th": "\"งานนี้ต้องให้ช่างผู้เชี่ยวชาญของเราดูค่ะ ขอจัดการให้นะคะ แล้วดิฉันจะโทรแจ้งเวลาภายในหนึ่งชั่วโมงค่ะ\"",
            "v": "best",
            "n": "Be honest that you need help, but keep ownership — you arrange it and you follow up.",
            "nTh": "ซื่อสัตย์ว่าต้องให้คนอื่นช่วย แต่ยังรับผิดชอบ คุณจัดการและคุณติดตามผลเอง"
          }, {
            "t": "\"No, I can't. Call reception.\"",
            "th": "\"ไม่ได้ครับ โทรหาแผนกต้อนรับเอาเองนะครับ\"",
            "v": "bad",
            "n": "Never hand the guest the job of chasing the hotel. You make the call, not them.",
            "nTh": "ห้ามโยนให้ลูกค้าไล่ตามเรื่องเอง คุณเป็นคนโทรจัดการ ไม่ใช่ลูกค้า"
          }, {
            "t": "\"I will try my best.\"",
            "th": "\"จะพยายามเต็มที่ครับ\"",
            "v": "ok",
            "n": "Willing, but it answers nothing. Tell the guest the actual next step and when.",
            "nTh": "เต็มใจดี แต่ไม่ได้ตอบอะไร บอกลูกค้าว่าขั้นตอนถัดไปคืออะไรและเมื่อไหร่"
          }, {
            "t": "\"Maybe tomorrow, maybe the day after.\"",
            "th": "\"อาจจะพรุ่งนี้ หรืออาจจะมะรืนครับ\"",
            "v": "bad",
            "n": "Two maybes is no answer. Commit to a next step and a time to confirm.",
            "nTh": "'อาจจะ' สองครั้งไม่ใช่คำตอบ ให้ยืนยันขั้นตอนถัดไปและเวลาที่จะแจ้งกลับ"
          }]
        }, {
          "type": "choice",
          "scene": "You have promised to return at six. It is now clear you will be twenty minutes late.",
          "sceneTh": "คุณสัญญาว่าจะกลับมาตอนหกโมง ตอนนี้ชัดแล้วว่าคุณจะสายไปยี่สิบนาที",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Call the room before six: \"I am running about twenty minutes late, I am sorry. I will be there by 6:20.\"",
            "th": "โทรเข้าห้องก่อนหกโมง \"ดิฉันจะไปสายประมาณยี่สิบนาที ต้องขอโทษด้วยค่ะ จะไปถึงภายใน 6 โมง 20 นะคะ\"",
            "v": "best",
            "n": "Tell them before the deadline passes, not after. A guest can forgive late; they cannot forgive being forgotten.",
            "nTh": "บอกก่อนถึงเวลานัด ไม่ใช่หลังเลยเวลา ลูกค้าให้อภัยความสายได้ แต่ให้อภัยการถูกลืมไม่ได้"
          }, {
            "t": "Just arrive at 6:20 and apologise then.",
            "th": "ไปถึงตอน 6 โมง 20 แล้วค่อยขอโทษ",
            "v": "ok",
            "n": "Better than nothing, but the guest has already waited and worried. A quick call would have saved that.",
            "nTh": "ดีกว่าไม่ทำอะไร แต่ลูกค้ารอและกังวลไปแล้ว โทรสั้น ๆ จะช่วยได้"
          }, {
            "t": "Say nothing and hope they do not notice the time.",
            "th": "ไม่พูดอะไรแล้วหวังว่าลูกค้าจะไม่สังเกตเวลา",
            "v": "bad",
            "n": "They gave you a time because it matters to them. Silence breaks the promise you made.",
            "nTh": "ลูกค้าให้เวลามาเพราะมันสำคัญกับเขา การเงียบคือการผิดสัญญาที่คุณให้ไว้"
          }, {
            "t": "Send someone else at six without telling the guest.",
            "th": "ให้คนอื่นไปแทนตอนหกโมงโดยไม่บอกลูกค้า",
            "v": "bad",
            "n": "The guest expects you. A stranger at the door with no warning is not the fix you promised.",
            "nTh": "ลูกค้ารอคุณอยู่ คนแปลกหน้ามาที่ประตูโดยไม่บอกไม่ใช่สิ่งที่คุณสัญญาไว้"
          }]
        }, {
          "type": "guest",
          "scene": "The fridge part will not arrive until tomorrow. The guest says they keep medicine that must stay cold.",
          "sceneTh": "อะไหล่ตู้เย็นจะมาถึงพรุ่งนี้ ลูกค้าบอกว่าเก็บยาที่ต้องแช่เย็นไว้",
          "guest": {
            "en": "But I have insulin in there — it has to stay cold. What do I do tonight?",
            "th": "แต่ฉันมีอินซูลินอยู่ในนั้น มันต้องแช่เย็นตลอด คืนนี้จะทำยังไง"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I understand — this is important. I will bring a working fridge to your room within the hour, and tell my manager now.\"",
            "th": "\"เข้าใจค่ะ เรื่องนี้สำคัญ ดิฉันจะนำตู้เย็นที่ใช้ได้มาที่ห้องคุณภายในหนึ่งชั่วโมง และแจ้งหัวหน้าเดี๋ยวนี้เลยค่ะ\"",
            "v": "best",
            "n": "Medicine that must stay cold is close to safety. Solve tonight now — a replacement fridge — and escalate.",
            "nTh": "ยาที่ต้องแช่เย็นเป็นเรื่องเกือบเท่าความปลอดภัย แก้เรื่องคืนนี้ทันที หาตู้เย็นมาแทน และแจ้งหัวหน้า"
          }, {
            "t": "\"The part comes tomorrow, so please wait until then.\"",
            "th": "\"อะไหล่มาพรุ่งนี้ค่ะ รบกวนรอถึงตอนนั้นนะคะ\"",
            "v": "bad",
            "n": "Their insulin cannot wait until tomorrow. This is urgent — find a cold place tonight.",
            "nTh": "อินซูลินของลูกค้ารอถึงพรุ่งนี้ไม่ได้ นี่เรื่องด่วน หาที่แช่เย็นให้คืนนี้"
          }, {
            "t": "\"You can put it in a bucket of ice.\"",
            "th": "\"เอาไปแช่ในถังน้ำแข็งก็ได้ค่ะ\"",
            "v": "ok",
            "n": "Quick thinking, but ice melts and insulin can spoil. Bring a proper working fridge.",
            "nTh": "คิดเร็วดี แต่น้ำแข็งละลายและอินซูลินอาจเสีย หาตู้เย็นที่ใช้ได้จริงมาให้"
          }, {
            "t": "\"That is a problem for reception, not maintenance.\"",
            "th": "\"อันนั้นเป็นเรื่องของแผนกต้อนรับ ไม่ใช่ช่างครับ\"",
            "v": "bad",
            "n": "Never pass a guest's health problem to another desk. Solve it, then inform whoever needs to know.",
            "nTh": "ห้ามโยนปัญหาสุขภาพของลูกค้าให้แผนกอื่น แก้ก่อน แล้วค่อยแจ้งคนที่ควรรู้"
          }]
        }, {
          "type": "choice",
          "scene": "You have made a temporary fix to a wobbling ceiling fan, but the real part should be replaced to be safe.",
          "sceneTh": "คุณซ่อมพัดลมเพดานที่สั่นแบบชั่วคราวไว้ แต่ควรเปลี่ยนอะไหล่จริงเพื่อความปลอดภัย",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I have made it safe for now, but I would like to replace the part tomorrow to be sure. May I come at ten?\"",
            "th": "\"ดิฉันทำให้ปลอดภัยไว้ก่อนแล้ว แต่อยากเปลี่ยนอะไหล่พรุ่งนี้เพื่อความมั่นใจค่ะ ขอมาตอนสิบโมงได้ไหมคะ\"",
            "v": "best",
            "n": "Be honest it is temporary, and book the real fix. Do not let a safety item sit on a patch.",
            "nTh": "ซื่อสัตย์ว่าเป็นการซ่อมชั่วคราว และนัดซ่อมจริง อย่าปล่อยเรื่องความปลอดภัยไว้แค่ซ่อมชั่วคราว"
          }, {
            "t": "\"All done, no problem,\" and say nothing about the part.",
            "th": "\"เสร็จเรียบร้อย ไม่มีปัญหาค่ะ\" โดยไม่พูดเรื่องอะไหล่",
            "v": "bad",
            "n": "Hiding that it is only temporary on a fan over the bed is a safety risk. Tell them and book the fix.",
            "nTh": "ปิดบังว่าเป็นการซ่อมชั่วคราวสำหรับพัดลมเหนือเตียงคือความเสี่ยง บอกลูกค้าและนัดซ่อม"
          }, {
            "t": "\"It might be okay, we will see.\"",
            "th": "\"น่าจะโอเค เดี๋ยวดูกันค่ะ\"",
            "v": "bad",
            "n": "'We will see' on a safety fix leaves the guest exposed. Commit to replacing the part.",
            "nTh": "'เดี๋ยวดูกัน' กับงานความปลอดภัยทำให้ลูกค้าเสี่ยง ยืนยันว่าจะเปลี่ยนอะไหล่"
          }, {
            "t": "\"I fixed it. If it breaks again, call us.\"",
            "th": "\"ซ่อมแล้วค่ะ ถ้าเสียอีกโทรมาได้เลย\"",
            "v": "ok",
            "n": "Honest that it might fail, but a safety part should be booked, not left to break again first.",
            "nTh": "ซื่อสัตย์ว่าอาจเสียอีก แต่อะไหล่ความปลอดภัยควรนัดเปลี่ยน ไม่ใช่รอให้เสียก่อน"
          }]
        }, {
          "type": "guest",
          "scene": "The guest raises their voice — they are angry the repair cannot be finished today.",
          "sceneTh": "ลูกค้าขึ้นเสียง โกรธที่ซ่อมวันนี้ไม่เสร็จ",
          "guest": {
            "en": "This is ridiculous. I've waited all day and it's still broken!",
            "th": "นี่มันเกินไปแล้ว ฉันรอทั้งวันแล้วมันยังพังอยู่เลย"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Stay calm: \"You are right to be frustrated, and I am sorry. Here is exactly what I will do and by when...\"",
            "th": "ใจเย็น \"คุณหงุดหงิดก็ถูกแล้วค่ะ ต้องขอโทษด้วย นี่คือสิ่งที่ดิฉันจะทำและเสร็จเมื่อไหร่...\"",
            "v": "best",
            "n": "Do not match their heat. Acknowledge the feeling, apologise, and give a concrete plan with a time.",
            "nTh": "อย่าขึ้นเสียงตาม รับรู้ความรู้สึก ขอโทษ และให้แผนที่ชัดเจนพร้อมเวลา"
          }, {
            "t": "\"There is no need to shout at me.\"",
            "th": "\"ไม่ต้องมาตะโกนใส่ผมก็ได้นะครับ\"",
            "v": "bad",
            "n": "Correcting an angry guest pours fuel on the fire. Absorb it and steer to a solution.",
            "nTh": "การไปสวนลูกค้าที่กำลังโกรธเหมือนเติมเชื้อไฟ รับไว้แล้วพาไปสู่ทางแก้"
          }, {
            "t": "\"It's not my fault the part is late.\"",
            "th": "\"อะไหล่มาช้าไม่ใช่ความผิดผมนะครับ\"",
            "v": "bad",
            "n": "The guest does not care whose fault it is. Own the outcome and give them a plan.",
            "nTh": "ลูกค้าไม่สนว่าเป็นความผิดใคร รับผลลัพธ์และให้แผนกับลูกค้า"
          }, {
            "t": "\"I'm sorry,\" and stand quietly waiting for them to calm down.",
            "th": "\"ขอโทษค่ะ\" แล้วยืนเงียบ ๆ รอให้ลูกค้าใจเย็นลง",
            "v": "ok",
            "n": "The apology is right, but silence leaves them with nothing. Follow it with a clear next step.",
            "nTh": "ขอโทษถูกแล้ว แต่การเงียบทำให้ลูกค้าไม่เหลืออะไร ตามด้วยขั้นตอนถัดไปที่ชัดเจน"
          }]
        }]
      }, {
        "id": "safety",
        "name": {
          "en": "Safety First",
          "th": "ความปลอดภัยต้องมาก่อน"
        },
        "questions": [{
          "type": "guest",
          "scene": "The guest points at the wall socket by the desk. It is black around the edge and there is a faint burning smell.",
          "sceneTh": "ลูกค้าชี้ไปที่ปลั๊กผนังข้างโต๊ะ ขอบปลั๊กมีรอยดำและมีกลิ่นไหม้จาง ๆ",
          "guest": {
            "en": "I plugged in my charger and it made a spark. Is it safe?",
            "th": "ฉันเสียบที่ชาร์จแล้วมันมีประกายไฟ มันปลอดภัยไหม"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"Please do not touch it, sir. I will switch off the power to it now and make it safe before anything else.\"",
            "th": "\"อย่าเพิ่งแตะนะคะ ดิฉันจะตัดไฟตรงนั้นเดี๋ยวนี้และทำให้ปลอดภัยก่อนอย่างอื่นค่ะ\"",
            "v": "best",
            "n": "This is safety, not service. Stop the guest touching it and cut the power first — everything else waits. Then report it.",
            "nTh": "นี่คือความปลอดภัย ไม่ใช่การบริการ ห้ามลูกค้าแตะและตัดไฟก่อน อย่างอื่นรอได้ แล้วรายงานต่อ"
          }, {
            "t": "\"It is probably fine, just don't use that one.\"",
            "th": "\"น่าจะไม่เป็นไรค่ะ แค่อย่าใช้อันนั้น\"",
            "v": "bad",
            "n": "A sparking, burnt socket can start a fire. 'Probably fine' can get someone hurt. Cut the power.",
            "nTh": "ปลั๊กที่ไหม้และมีประกายไฟทำให้เกิดไฟไหม้ได้ 'น่าจะไม่เป็นไร' ทำให้คนบาดเจ็บได้ ตัดไฟทันที"
          }, {
            "t": "\"Let me plug something in to test it.\"",
            "th": "\"เดี๋ยวขอเสียบอะไรลองดูนะคะ\"",
            "v": "bad",
            "n": "Never test a burnt socket by using it. Isolate the power first, then inspect it safely.",
            "nTh": "ห้ามทดสอบปลั๊กที่ไหม้ด้วยการใช้งาน ตัดไฟก่อน แล้วค่อยตรวจอย่างปลอดภัย"
          }, {
            "t": "\"I will come back with my tools later.\"",
            "th": "\"เดี๋ยวจะกลับมาพร้อมเครื่องมือทีหลังค่ะ\"",
            "v": "bad",
            "n": "A fire risk cannot wait for 'later'. Make it safe now, then do the repair.",
            "nTh": "ความเสี่ยงไฟไหม้รอ 'ทีหลัง' ไม่ได้ ทำให้ปลอดภัยเดี๋ยวนี้ แล้วค่อยซ่อม"
          }]
        }, {
          "type": "guest",
          "scene": "A guest stops you in the corridor near the pool.",
          "sceneTh": "ลูกค้าเรียกคุณที่ทางเดินใกล้สระว่ายน้ำ",
          "guest": {
            "en": "The light inside the pool wall is flickering underwater. My kids are swimming.",
            "th": "ไฟที่ผนังในสระกะพริบอยู่ใต้น้ำ ลูก ๆ ของฉันว่ายน้ำอยู่"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"Thank you for telling me. Please ask them to come out of the pool now while I switch the pool power off and check it.\"",
            "th": "\"ขอบคุณที่แจ้งนะคะ รบกวนให้เด็ก ๆ ขึ้นจากสระก่อนนะคะ ดิฉันจะตัดไฟสระและตรวจให้ค่ะ\"",
            "v": "best",
            "n": "Electricity and water together is the most dangerous thing you will meet. People out first, power off, then check. Report it at once.",
            "nTh": "ไฟฟ้ากับน้ำคือสิ่งอันตรายที่สุดที่คุณจะเจอ ให้คนขึ้นจากน้ำก่อน ตัดไฟ แล้วค่อยตรวจ รายงานทันที"
          }, {
            "t": "\"It's just the bulb, it's not dangerous.\"",
            "th": "\"แค่หลอดไฟค่ะ ไม่อันตรายหรอก\"",
            "v": "bad",
            "n": "You cannot know that from the corridor, and you are guessing with children in the water. Get them out first.",
            "nTh": "คุณรู้แบบนั้นจากทางเดินไม่ได้ และนี่คือการเดาทั้งที่มีเด็กอยู่ในน้ำ ให้เด็กขึ้นก่อน"
          }, {
            "t": "\"I will note it and check after my lunch.\"",
            "th": "\"เดี๋ยวจดไว้แล้วไปตรวจหลังพักเที่ยงค่ะ\"",
            "v": "bad",
            "n": "A possible live current in a pool full of children never waits for lunch. Act now.",
            "nTh": "ไฟฟ้ารั่วในสระที่มีเด็กเต็มไปหมดรอพักเที่ยงไม่ได้ ลงมือเดี๋ยวนี้"
          }, {
            "t": "\"You should tell the lifeguard.\"",
            "th": "\"คุณควรไปบอกไลฟ์การ์ดนะคะ\"",
            "v": "ok",
            "n": "Getting the lifeguard is good — but you are here now. Act first, then bring the lifeguard in too.",
            "nTh": "เรียกไลฟ์การ์ดเป็นเรื่องดี แต่คุณอยู่ตรงนี้แล้ว ลงมือก่อน แล้วค่อยเรียกไลฟ์การ์ดมาด้วย"
          }]
        }, {
          "type": "guest",
          "scene": "Fixing a cabinet hinge on the balcony, you notice the balcony railing is loose. The guest is watching.",
          "sceneTh": "ระหว่างซ่อมบานพับตู้ที่ระเบียง คุณสังเกตว่าราวระเบียงหลวม ลูกค้ามองอยู่",
          "guest": {
            "en": "Oh, I hadn't noticed that. Is the railing okay?",
            "th": "อ้าว ฉันไม่ทันสังเกตเลย ราวระเบียงโอเคไหม"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"Please don't lean on it for now. I will secure it today and check the whole railing before I sign it off.\"",
            "th": "\"ตอนนี้อย่าเพิ่งพิงนะคะ ดิฉันจะยึดให้แน่นวันนี้เลย และตรวจราวทั้งเส้นก่อนปิดงานค่ะ\"",
            "v": "best",
            "n": "A loose high railing is a fall risk. Warn the guest off it, fix it today, and check the whole thing — this is safety.",
            "nTh": "ราวระเบียงสูงที่หลวมเสี่ยงตก เตือนลูกค้าไม่ให้พิง ซ่อมวันนี้ และตรวจทั้งเส้น นี่คือความปลอดภัย"
          }, {
            "t": "\"It's a little loose but it will hold.\"",
            "th": "\"หลวมนิดหน่อยแต่ยังรับได้ค่ะ\"",
            "v": "bad",
            "n": "Never reassure a guest that a high railing 'will hold' when you have not secured it. Warn them and fix it.",
            "nTh": "ห้ามบอกลูกค้าว่าราวระเบียงสูง 'ยังรับได้' ทั้งที่ยังไม่ได้ยึด เตือนลูกค้าและซ่อม"
          }, {
            "t": "\"That's not the job I came for.\"",
            "th": "\"อันนั้นไม่ใช่งานที่ผมมาซ่อมครับ\"",
            "v": "bad",
            "n": "A safety fault is everyone's job the moment they see it. Never walk past a danger.",
            "nTh": "อาการเสียที่เกี่ยวกับความปลอดภัยเป็นงานของทุกคนทันทีที่เห็น ห้ามเดินผ่านอันตราย"
          }, {
            "t": "\"I'll write it down for someone to look at.\"",
            "th": "\"เดี๋ยวจดไว้ให้คนมาดูค่ะ\"",
            "v": "ok",
            "n": "Reporting it is right, but a loose railing needs a warning to the guest now, not just a note for later.",
            "nTh": "รายงานถูกแล้ว แต่ราวที่หลวมต้องเตือนลูกค้าเดี๋ยวนี้ ไม่ใช่แค่จดไว้ทีหลัง"
          }]
        }, {
          "type": "guest",
          "scene": "Near the room's kitchenette you catch a strong smell of gas. The guest is standing by the stove.",
          "sceneTh": "ใกล้มุมครัวเล็กในห้อง คุณได้กลิ่นแก๊สแรง ลูกค้ายืนอยู่ข้างเตา",
          "guest": {
            "en": "I think I smell gas too. Should I turn on the fan?",
            "th": "ฉันว่าฉันก็ได้กลิ่นแก๊สเหมือนกัน เปิดพัดลมดีไหม"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"Please do not touch any switch. Come outside with me now — I will shut the gas off and report it immediately.\"",
            "th": "\"อย่าเพิ่งแตะสวิตช์ใด ๆ นะคะ ออกมาข้างนอกกับดิฉันเดี๋ยวนี้ค่ะ ดิฉันจะปิดแก๊สและแจ้งทันที\"",
            "v": "best",
            "n": "This is safety. With a gas smell, any switch can spark and ignite it. People out, no switches, gas off, report.",
            "nTh": "นี่คือความปลอดภัย เมื่อมีกลิ่นแก๊ส สวิตช์ใด ๆ อาจเกิดประกายไฟและติดไฟ พาคนออก ห้ามแตะสวิตช์ ปิดแก๊ส แจ้ง"
          }, {
            "t": "\"Yes, turn on the fan to clear the smell.\"",
            "th": "\"ค่ะ เปิดพัดลมไล่กลิ่นเลย\"",
            "v": "bad",
            "n": "A fan switch can spark and ignite gas. Never operate any switch when you smell gas.",
            "nTh": "สวิตช์พัดลมอาจเกิดประกายไฟและจุดแก๊สติด ห้ามใช้สวิตช์ใด ๆ เมื่อได้กลิ่นแก๊ส"
          }, {
            "t": "\"Open a window and it will be fine.\"",
            "th": "\"เปิดหน้าต่างแล้วก็หายเองค่ะ\"",
            "v": "ok",
            "n": "Ventilation helps, but a strong gas smell needs the guest out and the supply shut off, not just a window.",
            "nTh": "การระบายอากาศช่วยได้ แต่กลิ่นแก๊สแรงต้องพาลูกค้าออกและปิดแก๊ส ไม่ใช่แค่เปิดหน้าต่าง"
          }, {
            "t": "\"Let me light the stove to check if it is really gas.\"",
            "th": "\"ขอจุดเตาดูว่าเป็นแก๊สจริงไหมนะคะ\"",
            "v": "bad",
            "n": "Never introduce a flame near a gas smell. That is how an explosion happens.",
            "nTh": "ห้ามนำเปลวไฟเข้าใกล้กลิ่นแก๊สเด็ดขาด นั่นคือสาเหตุการระเบิด"
          }]
        }, {
          "type": "choice",
          "scene": "While fixing the TV bracket you see bare, exposed wiring behind the unit — not part of your job today.",
          "sceneTh": "ระหว่างซ่อมขาแขวนทีวี คุณเห็นสายไฟเปลือยโผล่อยู่หลังเครื่อง ไม่ใช่งานที่มาซ่อมวันนี้",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Switch off the power to it, make the wiring safe, and report it before you leave the room.",
            "th": "ตัดไฟตรงนั้น ทำให้สายไฟปลอดภัย และรายงานก่อนออกจากห้อง",
            "v": "best",
            "n": "Exposed live wiring is a shock and fire risk. The moment you see it, it is your job. Isolate, make safe, report.",
            "nTh": "สายไฟเปลือยที่มีไฟเสี่ยงไฟช็อตและไฟไหม้ ทันทีที่เห็นก็เป็นงานคุณ ตัดไฟ ทำให้ปลอดภัย รายงาน"
          }, {
            "t": "Leave it — you came to fix the bracket, not the wiring.",
            "th": "ปล่อยไว้ เพราะมาซ่อมขาแขวน ไม่ใช่สายไฟ",
            "v": "bad",
            "n": "Walking past exposed wiring in an occupied room is how people get hurt. Never ignore a danger you see.",
            "nTh": "การเดินผ่านสายไฟเปลือยในห้องที่มีคนพักคือสาเหตุที่คนบาดเจ็บ ห้ามมองข้ามอันตรายที่เห็น"
          }, {
            "t": "Push the wire back behind the TV so it is out of sight.",
            "th": "ดันสายไฟกลับเข้าไปหลังทีวีให้พ้นสายตา",
            "v": "bad",
            "n": "Hiding a live wire does not make it safe — it makes it worse. Cut the power and report it.",
            "nTh": "การซ่อนสายไฟที่มีไฟไม่ได้ทำให้ปลอดภัย มีแต่แย่ลง ตัดไฟและรายงาน"
          }, {
            "t": "Tell the guest to be careful not to touch behind the TV.",
            "th": "บอกลูกค้าให้ระวังอย่าไปแตะหลังทีวี",
            "v": "ok",
            "n": "A warning is better than nothing, but a live wire must be made safe, not just pointed out.",
            "nTh": "การเตือนดีกว่าไม่ทำอะไร แต่สายไฟที่มีไฟต้องทำให้ปลอดภัย ไม่ใช่แค่ชี้ให้ดู"
          }]
        }]
      }, {
        "id": "finish",
        "name": {
          "en": "Finishing Up",
          "th": "ก่อนออกจากห้อง"
        },
        "questions": [{
          "type": "choice",
          "scene": "The air-conditioning is fixed and blowing cold. You are ready to leave the room.",
          "sceneTh": "ซ่อมแอร์เสร็จแล้วและเป่าลมเย็นดี คุณพร้อมจะออกจากห้อง",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"It is working now — please feel the cold air. Is there anything else I can look at while I am here?\"",
            "th": "\"ใช้ได้แล้วค่ะ ลองสัมผัสลมเย็นดูได้เลยค่ะ มีอะไรให้ดิฉันดูให้อีกไหมคะ ในเมื่อดิฉันอยู่ตรงนี้แล้ว\"",
            "v": "best",
            "n": "Show them it works, then offer a little more. That one question turns a repair into service.",
            "nTh": "ให้ลูกค้าเห็นว่าใช้ได้ แล้วเสนอช่วยเพิ่ม คำถามนั้นเปลี่ยนงานซ่อมให้เป็นการบริการ"
          }, {
            "t": "\"Finished. Bye.\"",
            "th": "\"เสร็จแล้วค่ะ บายค่ะ\"",
            "v": "ok",
            "n": "It is done, but flat. Show them it works and ask if they need anything else.",
            "nTh": "เสร็จก็จริง แต่เย็นชา ให้ลูกค้าเห็นว่าใช้ได้และถามว่าต้องการอะไรอีกไหม"
          }, {
            "t": "Pack up and leave without a word.",
            "th": "เก็บของแล้วออกไปโดยไม่พูดอะไร",
            "v": "bad",
            "n": "Leaving in silence leaves the guest unsure it is even fixed. Always confirm before you go.",
            "nTh": "ออกไปเงียบ ๆ ทำให้ลูกค้าไม่แน่ใจว่าซ่อมเสร็จหรือยัง ยืนยันก่อนออกเสมอ"
          }, {
            "t": "\"Should be okay now.\"",
            "th": "\"น่าจะโอเคแล้วค่ะ\"",
            "v": "bad",
            "n": "'Should be' tells the guest you are not sure. Test it in front of them so they know it is fixed.",
            "nTh": "'น่าจะ' บอกลูกค้าว่าคุณไม่มั่นใจ ทดสอบให้ลูกค้าเห็นเพื่อให้รู้ว่าซ่อมเสร็จจริง"
          }]
        }, {
          "type": "guest",
          "scene": "You have finished and confirmed it works. The guest is happy.",
          "sceneTh": "คุณซ่อมเสร็จและยืนยันว่าใช้ได้แล้ว ลูกค้าพอใจ",
          "guest": {
            "en": "Thank you so much, that's great. Sorry to have troubled you.",
            "th": "ขอบคุณมากเลย เยี่ยมไปเลย ขอโทษที่รบกวนนะ"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"It is my pleasure, madam. Thank you for your patience — please call us any time.\"",
            "th": "\"ด้วยความยินดีค่ะ ขอบคุณที่ลูกค้าใจเย็นรอนะคะ โทรหาเราได้ตลอดเวลาเลยค่ะ\"",
            "v": "best",
            "n": "'It is my pleasure' is the magic phrase, and thanking them for their patience leaves the room warm.",
            "nTh": "'ด้วยความยินดี' คือคำวิเศษ และการขอบคุณที่ลูกค้าใจเย็นทำให้จบอย่างอบอุ่น"
          }, {
            "t": "\"No problem.\"",
            "th": "\"ไม่มีปัญหาค่ะ\"",
            "v": "ok",
            "n": "Friendly, but small. 'It is my pleasure' is the phrase we want them to hear.",
            "nTh": "เป็นกันเองดี แต่ธรรมดาไป 'ด้วยความยินดี' คือคำที่เราอยากให้ลูกค้าได้ยิน"
          }, {
            "t": "\"Yes, it was a lot of trouble actually.\"",
            "th": "\"ใช่ค่ะ จริง ๆ ก็ยุ่งพอสมควรเลย\"",
            "v": "bad",
            "n": "She apologised — never make a guest feel they were a burden. Reassure her instead.",
            "nTh": "ลูกค้าขอโทษแล้ว ห้ามทำให้ลูกค้ารู้สึกว่าเป็นภาระ ให้ลูกค้าสบายใจแทน"
          }, {
            "t": "\"It is my job.\"",
            "th": "\"ก็หน้าที่ผมครับ\"",
            "v": "ok",
            "n": "True and not rude, but it is a closed door. 'It is my pleasure' opens one.",
            "nTh": "จริงและไม่หยาบ แต่เป็นการปิดบทสนทนา 'ด้วยความยินดี' เปิดใจมากกว่า"
          }]
        }, {
          "type": "choice",
          "scene": "You are leaving. On the desk you see the guest's watch, which you moved earlier to reach the socket.",
          "sceneTh": "คุณกำลังจะออก บนโต๊ะคุณเห็นนาฬิกาของลูกค้าที่คุณขยับไว้ตอนซ่อมปลั๊ก",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Put the watch back exactly where it was and say, \"I have put your watch back here, sir.\"",
            "th": "วางนาฬิกาคืนตรงที่เดิมเป๊ะ แล้วบอกว่า \"ดิฉันวางนาฬิกาคืนไว้ตรงนี้นะคะ\"",
            "v": "best",
            "n": "Return everything you moved to its place, and say so out loud. That is how trust is kept.",
            "nTh": "วางทุกอย่างที่ขยับคืนที่เดิม และพูดบอกด้วย นั่นคือวิธีรักษาความไว้ใจ"
          }, {
            "t": "Leave the watch where you set it down.",
            "th": "วางนาฬิกาไว้ตรงที่คุณวางไว้",
            "v": "ok",
            "n": "Not wrong, but a moved valuable can look like a missing one. Put it back and mention it.",
            "nTh": "ไม่ผิด แต่ของมีค่าที่ถูกขยับอาจดูเหมือนหาย วางคืนและบอกด้วย"
          }, {
            "t": "Slip it into the desk drawer to keep it safe.",
            "th": "เก็บใส่ลิ้นชักโต๊ะเพื่อความปลอดภัย",
            "v": "bad",
            "n": "Never move a guest's valuables out of sight. That is exactly how you get accused of taking it.",
            "nTh": "ห้ามเอาของมีค่าของลูกค้าไปเก็บให้พ้นสายตา นั่นคือวิธีที่จะโดนกล่าวหาว่าขโมย"
          }, {
            "t": "Say nothing about it and leave.",
            "th": "ไม่พูดถึงมันแล้วออกไป",
            "v": "ok",
            "n": "You did no wrong, but a word confirms you touched nothing you should not have.",
            "nTh": "คุณไม่ได้ทำผิด แต่การพูดสักคำยืนยันว่าคุณไม่ได้แตะอะไรที่ไม่ควร"
          }]
        }, {
          "type": "guest",
          "scene": "You have finished. As you pack up, the guest asks you to look at a problem in their friend's room next door.",
          "sceneTh": "คุณซ่อมเสร็จแล้ว ระหว่างเก็บของ ลูกค้าขอให้คุณไปดูปัญหาในห้องเพื่อนที่อยู่ติดกัน",
          "guest": {
            "en": "While you're here, could you quickly check my friend's room next door? Room 214.",
            "th": "ในเมื่อคุณอยู่แล้ว ช่วยไปดูห้องเพื่อนฉันข้าง ๆ หน่อยได้ไหม ห้อง 214"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I would be glad to help. Let me check with reception so it is booked properly — may I have them send me to 214?\"",
            "th": "\"ยินดีช่วยค่ะ ขอเช็กกับแผนกต้อนรับก่อนเพื่อให้ลงงานถูกต้องนะคะ ให้เขาส่งดิฉันไปห้อง 214 ได้ไหมคะ\"",
            "v": "best",
            "n": "You cannot enter another room on a third party's say-so. Be willing, but go through reception.",
            "nTh": "คุณเข้าอีกห้องตามคำของคนอื่นไม่ได้ เต็มใจช่วย แต่ต้องผ่านแผนกต้อนรับ"
          }, {
            "t": "\"Sure, give me the key and I'll pop over.\"",
            "th": "\"ได้เลยครับ เอากุญแจมา เดี๋ยวแวะไปให้\"",
            "v": "bad",
            "n": "Never enter a room because another guest asked. Access must come through reception, for security.",
            "nTh": "ห้ามเข้าห้องเพราะลูกค้าอีกคนขอ การเข้าห้องต้องผ่านแผนกต้อนรับเพื่อความปลอดภัย"
          }, {
            "t": "\"Sorry, that is not my room to enter.\"",
            "th": "\"ขอโทษค่ะ ห้องนั้นดิฉันเข้าไม่ได้\"",
            "v": "ok",
            "n": "Correct that you cannot just go, but it sounds like a refusal. Offer to arrange it properly.",
            "nTh": "ถูกที่ว่าเข้าเองไม่ได้ แต่ฟังดูเหมือนปฏิเสธ เสนอจัดการให้อย่างถูกต้อง"
          }, {
            "t": "Ignore the request and finish packing.",
            "th": "ไม่สนคำขอแล้วเก็บของต่อ",
            "v": "bad",
            "n": "Ignoring a guest is never the answer. Acknowledge it and offer the right way to help.",
            "nTh": "การเพิกเฉยลูกค้าไม่ใช่คำตอบ รับคำขอและเสนอวิธีช่วยที่ถูกต้อง"
          }]
        }, {
          "type": "choice",
          "scene": "At the door on your way out, you remember you also ran the hot tap earlier and never checked it came good.",
          "sceneTh": "ตอนอยู่ที่ประตูกำลังจะออก คุณนึกได้ว่าเมื่อกี้เปิดก๊อกน้ำร้อนไว้ด้วยและยังไม่ได้เช็กว่าปกติดี",
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "Go back and test the hot water in front of the guest before you leave.",
            "th": "กลับไปทดสอบน้ำร้อนให้ลูกค้าเห็นก่อนออกจากห้อง",
            "v": "best",
            "n": "Never leave on a 'probably'. Two minutes checking now saves a second call-out and a second apology.",
            "nTh": "อย่าออกไปทั้งที่ 'น่าจะ' เช็กสองนาทีตอนนี้ประหยัดการเรียกซ้ำและการขอโทษรอบสอง"
          }, {
            "t": "Leave — you are fairly sure it was fine.",
            "th": "ออกไปเลย เพราะค่อนข้างมั่นใจว่าปกติดี",
            "v": "bad",
            "n": "'Fairly sure' is how a guest ends up calling again tonight. Check it while you are here.",
            "nTh": "'ค่อนข้างมั่นใจ' คือสาเหตุที่ลูกค้าโทรมาอีกคืนนี้ เช็กตอนที่ยังอยู่"
          }, {
            "t": "Tell the guest to check the hot water themselves later.",
            "th": "บอกลูกค้าให้ไปเช็กน้ำร้อนเองทีหลัง",
            "v": "bad",
            "n": "Never hand your check to the guest. Testing your own work is your job, not theirs.",
            "nTh": "ห้ามโยนการตรวจให้ลูกค้า การทดสอบงานของคุณคือหน้าที่คุณ ไม่ใช่ของลูกค้า"
          }, {
            "t": "Make a note to check it on your next visit.",
            "th": "จดไว้ว่าจะเช็กในการมาครั้งหน้า",
            "v": "ok",
            "n": "There may be no next visit. You are at the tap now — turn it on and be sure.",
            "nTh": "อาจไม่มีครั้งหน้า คุณอยู่ที่ก๊อกแล้ว เปิดดูให้แน่ใจเลย"
          }]
        }, {
          "type": "guest",
          "scene": "The grateful guest asks for your personal phone number to call you directly next time.",
          "sceneTh": "ลูกค้าที่พอใจขอเบอร์โทรส่วนตัวของคุณเพื่อจะโทรหาคุณโดยตรงในครั้งหน้า",
          "guest": {
            "en": "You were great. Can I get your number so I can just call you directly next time?",
            "th": "คุณเก่งมาก ขอเบอร์หน่อยได้ไหม ครั้งหน้าจะได้โทรหาคุณตรง ๆ"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Thank you, that is kind. The best way is to call reception any time and they will send me straight up.\"",
            "th": "\"ขอบคุณค่ะ ใจดีจังเลย วิธีที่ดีที่สุดคือโทรหาแผนกต้อนรับได้ตลอดเวลา แล้วเขาจะส่งดิฉันขึ้นมาให้ทันทีค่ะ\"",
            "v": "best",
            "n": "Take the compliment warmly, but keep it professional — route them through reception, not your personal line.",
            "nTh": "รับคำชมอย่างอบอุ่น แต่รักษาความเป็นมืออาชีพ ให้ผ่านแผนกต้อนรับ ไม่ใช่เบอร์ส่วนตัว"
          }, {
            "t": "Give them your personal mobile number.",
            "th": "ให้เบอร์มือถือส่วนตัว",
            "v": "bad",
            "n": "Keep guest contact through the hotel's channels. A personal number crosses a line you should not.",
            "nTh": "ให้ลูกค้าติดต่อผ่านช่องทางของโรงแรม เบอร์ส่วนตัวคือการข้ามเส้นที่ไม่ควร"
          }, {
            "t": "\"No, we are not allowed to do that.\"",
            "th": "\"ไม่ได้ค่ะ เราไม่ได้รับอนุญาตให้ทำแบบนั้น\"",
            "v": "ok",
            "n": "The rule is right, but a flat 'not allowed' feels cold after a compliment. Offer the reception route warmly.",
            "nTh": "กฎถูกต้อง แต่ 'ไม่ได้รับอนุญาต' ห้วน ๆ ฟังดูเย็นชาหลังคำชม เสนอช่องทางแผนกต้อนรับอย่างอบอุ่น"
          }, {
            "t": "Pretend you did not hear and leave.",
            "th": "ทำเป็นไม่ได้ยินแล้วออกไป",
            "v": "bad",
            "n": "Ignoring the guest is rude. Answer warmly and point them to the right way to reach you.",
            "nTh": "การเพิกเฉยลูกค้าเสียมารยาท ตอบอย่างอบอุ่นและบอกช่องทางที่ถูกต้องในการติดต่อ"
          }]
        }]
      }]
    },
    "fb-restaurant-service": {
      "id": "fb-restaurant-service",
      "name": {
        "en": "Restaurant & Room Service",
        "th": "บริการห้องอาหารและรูมเซอร์วิส"
      },
      "guestFacing": true,
      "source": "FB-SAN English Manual, Rev. Feb 2024",
      "inherits": ["core-service-standard"],
      "units": [{
        "id": "fb-welcome",
        "name": {
          "en": "Welcome & Seating",
          "th": "การทักทายและเชิญลูกค้านั่ง"
        },
        "questions": [{
          "type": "choice",
          "scene": "A couple walks up to the restaurant entrance. You greet them with a wai.",
          "sceneTh": "ลูกค้าคู่หนึ่งเดินมาที่หน้าห้องอาหาร คุณไหว้ทักทาย",
          "ask": "What do you say first?",
          "askTh": "คุณจะพูดอะไรก่อน",
          "options": [{
            "t": "Sawasdee kha. Welcome to {{outlet.signature}} Restaurant. Do you have a reservation?",
            "th": "สวัสดีค่ะ ยินดีต้อนรับสู่ห้องอาหาร {{outlet.signature}} คุณได้จองโต๊ะไว้หรือไม่คะ",
            "v": "best",
            "n": "Greeting, restaurant name, then the question.",
            "nTh": "ทักทาย บอกชื่อห้องอาหาร แล้วค่อยถาม"
          }, {
            "t": "Hello. Do you have a reservation?",
            "th": "สวัสดี คุณจองไว้ไหม",
            "v": "ok",
            "n": "Correct English, but cold.",
            "nTh": "ภาษาถูก แต่เย็นชา"
          }, {
            "t": "You have booking or not?",
            "th": "คุณจองหรือไม่จอง",
            "v": "bad",
            "n": "Sounds like an interrogation.",
            "nTh": "ฟังดูเหมือนสอบสวน"
          }, {
            "t": "Yes? What do you want?",
            "th": "อะไรคะ ต้องการอะไร",
            "v": "bad",
            "n": "Never open with this.",
            "nTh": "ห้ามเปิดด้วยประโยคนี้"
          }]
        }]
      }, {
        "id": "fb-recommend",
        "name": {
          "en": "Recommending",
          "th": "การแนะนำห้องอาหาร"
        },
        "questions": [{
          "type": "choice",
          "scene": "The guest likes seafood.",
          "sceneTh": "ลูกค้าชอบซีฟู้ด",
          "ask": "Sell the signature restaurant.",
          "askTh": "ขายห้องอาหารซิกเนเจอร์",
          "options": [{
            "t": "I would recommend {{outlet.signature}}, {{outlet.signature.pitch}}. I am sure you will love it.",
            "th": "ขอแนะนำห้องอาหาร {{outlet.signature}} ค่ะ {{outlet.signature.pitch}} ดิฉันมั่นใจว่าคุณจะต้องชอบค่ะ",
            "v": "best",
            "n": "Paint the evening. Don't list the facts.",
            "nTh": "วาดภาพค่ำคืนให้ลูกค้าเห็น ไม่ใช่แค่บอกข้อมูล"
          }, {
            "t": "{{outlet.signature}} serves seafood.",
            "th": "{{outlet.signature}} เสิร์ฟซีฟู้ดค่ะ",
            "v": "ok",
            "n": "True. It does not make a booking.",
            "nTh": "จริง แต่ไม่ทำให้ลูกค้าจอง"
          }, {
            "t": "It is quite expensive but it is good.",
            "th": "ค่อนข้างแพงนะคะ แต่ดีค่ะ",
            "v": "bad",
            "n": "Never introduce a price objection yourself.",
            "nTh": "ห้ามเป็นคนหยิบเรื่องราคาแพงขึ้นมาเอง"
          }, {
            "t": "All our restaurants are good.",
            "th": "ห้องอาหารเราดีทุกที่ค่ะ",
            "v": "bad",
            "n": "Tells them nothing, sells nothing.",
            "nTh": "ไม่ได้บอกอะไร และขายไม่ได้"
          }]
        }]
      }]
    }
  }
};
const AUDIO_MANIFEST = ["125c9bj7ew0", "12nknuws0d1", "139hctxweds", "13ci1fn77yu", "13oxtrc20wh", "13w7n81hv6t", "147sbl8jc1z", "14iiv6kyhkm", "14jwknbaw4l", "14mlwj22dsq", "16r5zgfgovr", "17pyyf3wn3l", "189e2qobnbm", "18azch7i6t9", "19ielgvsx8", "1a8h02825bd", "1afonlzhila", "1bg9a2pwj9l", "1by1u4jatgu", "1bzoep8adxb", "1cpwl5qwj5n", "1cxi67twonf", "1d0rko7kbhv", "1ddy14rk1p9", "1e8l2guwvrp", "1ehmqzolyxc", "1epp3iqfbpl", "1euqefgnzzd", "1fif898n549", "1fpj2lnxqyp", "1fuqb360qos", "1fv1zy6x4g7", "1g8zpagx1i6", "1h5m08jsqxq", "1h8bes4gfv9", "1irsl9k5ljs", "1j4fz9zq6z3", "1j6a0frxl42", "1jhcgh0cxyy", "1jqcfat8m3s", "1jtmar82vk", "1ka17362nm7", "1l4q61es8zp", "1l5fq3i42l3", "1lnr2zwbedw", "1m3xb0mglhh", "1mfu1ufcm0c", "1mtx93t9hb1", "1n1hnvejk3t", "1osq1kzvtv8", "1pyenl61f94", "1qahsx66g72", "1qaqabnmbp0", "1qng5tveh1k", "1qsmga8zrwt", "1rax42uy3tp", "1rknigefb28", "1skjru7oxl7", "1slfb4nao7v", "1svhhzqubr6", "1t6j3vpjoez", "1tzhgcndago", "1uvatb059o", "1v3v7ivhrwf", "1v42f4bei5", "1v487piiagr", "1v6ue1ioufs", "1vc955meo2", "1wb4osztpjd", "1wf5s14x3wn", "1x046b7w46y", "1xdrdh4tc0o", "1xgccxjzcm1", "1xhee4rh2cz", "1y759hbcedv", "1y7uxjuuvgj", "1yqf19llh1i", "1zq6us7t7ju", "1zqyv32iciv", "20aplbm89tg", "229yo73d9f5", "23lzcbr9gp1", "24aqm5m6nqb", "25p4n0nnvyy", "25vrq1se5xr", "26e47q9zoc6", "26i189yid9s", "26uq4x4w7lc", "2726mca4c3m", "27hw5paen5x", "27zfb81idf4", "28j7fdpyzng", "28mji10j3pp", "28omfcdy9bo", "2amw0eehys3", "2ap3dm5kfds", "2ax9wi9rxez", "2axs49y73pc", "2azn1kjng6o", "2bgywbzql4s", "2bsghukafmd", "2bvt7tzchde", "2d9zsc6jhqp", "2e9gsyl5hlp", "2epyk61y0", "2g1x992o865", "2g2wk1gyk1u", "2gdou26ugyi", "2pw85qli3c", "42zdmphpw3", "43tl5brcaa", "4enur57s2d", "4l2ocoigvx", "4lwmcg7f34", "50t6nrgkyn", "59kbkvlim2", "5b9vxz90ad", "67a4x5qc6a", "6xdm6gpfy0", "75x4d9ayql", "7tc94p1xfp", "8snkgda42m", "926lbrztxo", "9pai0mfj8j", "9spqjdg2rg", "awpnv8pw8o", "axzbds52yg", "b6varbz2v5", "bgobukjjhi", "c5jv5l9n06", "c6ai6bog8u", "ci86l009yc", "d2hquxajpc", "d5xwrv7w49", "dbloce4f16", "dik0otdiur", "dzcgti9866", "edjrjh1fll", "fib7cknv4y", "g1lu46xfn8", "hitujkw967", "i5x5027d3z", "ixav4rbp88", "ji39n2e93l", "jk5rizkw9v", "k0ozeht5zf", "kjg9ekiyjh", "ku6a905rrm", "m4lne8x3hl", "mh42prm0k7", "mznw6cykcy", "nyo5y9whpq", "ot86g5emuo", "p6jrn969k2", "pky2r9yuuk", "po0b54gg7a", "qchcpqm6kt", "qxd7oef9n7", "qyl16trxpv", "r8niwudveu", "rt0gw6r53u", "s01u11g3iq", "swnfav5n9c", "t9rp6nieo0", "tbdj510vnq", "te4vsumtyj", "te8rdem4zs", "tlcp2fmqio", "ujbmr2tflw", "uvjedb7x5j", "vfhm0inl1n", "wcjmwq5yxs", "wi8iclzjlx", "wjomsbj58b", "xpfp13zkpw", "xqr6u2bfa2"];

/* ============================================================
   KATATHANI LINGO — Learn. Practice. Serve.
   F&B / Restaurant & Room Service
   Source: FB-SAN English Manual (Rev. Feb 2024)

   v2 — Thai throughout, Thai toggle, pronunciation coach.
   Deliberately NO Thai-script transliteration of English:
   it teaches dropped final consonants. Ear first, then mouth.
   ============================================================ */

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Sans+Thai:wght@400;500;600&display=swap');

:root{
  --shell:#F6F1E8; --card:#FFFDF9; --ink:#1C2B2C; --ink-soft:#5C6D6C;
  --line:#E2DACD; --sea:#0E6E63; --sea-tint:#E4F0ED;
  --gold:#B87A2B; --gold-tint:#F6EBD8; --coral:#B8452F; --coral-tint:#F7E6E1;
}
.se-root *{box-sizing:border-box;margin:0;padding:0;}
.se-root{font-family:'IBM Plex Sans','IBM Plex Sans Thai',sans-serif;background:var(--shell);color:var(--ink);min-height:100vh;display:flex;justify-content:center;-webkit-font-smoothing:antialiased;}
.se-phone{width:100%;max-width:430px;min-height:100vh;display:flex;flex-direction:column;background:var(--shell);}
.th{font-family:'IBM Plex Sans Thai',sans-serif;}

.hd{padding:20px 20px 12px;display:flex;align-items:baseline;justify-content:space-between;gap:12px;}
.hd h1{font-family:'Fraunces',serif;font-size:22px;font-weight:700;letter-spacing:-.01em;line-height:1.1;}
.hd .sub{font-size:11px;color:var(--ink-soft);letter-spacing:.14em;text-transform:uppercase;margin-top:5px;}
.xp{display:flex;align-items:center;gap:6px;font-family:'Fraunces',serif;font-weight:700;font-size:17px;color:var(--gold);white-space:nowrap;}
.xp small{font-family:'IBM Plex Sans';font-weight:600;font-size:10px;letter-spacing:.1em;color:var(--ink-soft);}

/* Thai toggle */
.thai-toggle{display:flex;align-items:center;gap:8px;margin:0 20px 14px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:9px 13px;cursor:pointer;width:calc(100% - 40px);}
.thai-toggle .sw{width:36px;height:20px;border-radius:999px;background:var(--line);position:relative;flex:0 0 36px;transition:background .18s;}
.thai-toggle .sw i{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .18s;box-shadow:0 1px 3px rgba(0,0,0,.2);}
.thai-toggle.on .sw{background:var(--sea);}
.thai-toggle.on .sw i{transform:translateX(16px);}
.thai-toggle .lb{font-size:13px;font-weight:600;text-align:left;flex:1;}
.thai-toggle .lb span{display:block;font-weight:400;font-size:11.5px;color:var(--ink-soft);margin-top:1px;}

.list{padding:0 16px 40px;display:flex;flex-direction:column;gap:10px;}
.mod{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:15px 16px;text-align:left;cursor:pointer;width:100%;display:flex;gap:14px;align-items:center;transition:transform .12s,box-shadow .12s;}
.mod:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(28,43,44,.07);}
.mod:focus-visible{outline:2px solid var(--sea);outline-offset:2px;}
.mod.soon{opacity:.6;cursor:default;}
.mod.soon:hover{transform:none;box-shadow:none;}
.badge{font-size:10px;font-weight:600;letter-spacing:.03em;color:var(--gold);background:var(--gold-tint);border:1px solid #EAD6B4;border-radius:999px;padding:4px 10px;white-space:nowrap;flex:0 0 auto;}
.chev{font-size:22px;color:var(--ink-soft);line-height:1;flex:0 0 auto;padding-right:2px;}
.num{font-family:'Fraunces',serif;font-weight:700;font-size:15px;width:38px;height:38px;flex:0 0 38px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:var(--sea-tint);color:var(--sea);}
.num.done{background:var(--sea);color:#fff;}
.mod .body{flex:1;min-width:0;}
.mod .en{font-weight:600;font-size:15px;line-height:1.25;}
.mod .thai{font-size:12.5px;color:var(--ink-soft);margin-top:2px;}
.mod .meta{font-size:11px;color:var(--ink-soft);margin-top:7px;display:flex;gap:10px;align-items:center;}
.bar{height:3px;background:var(--line);border-radius:2px;flex:1;overflow:hidden;}
.bar i{display:block;height:100%;background:var(--sea);border-radius:2px;transition:width .4s;}

.top{padding:14px 16px;display:flex;align-items:center;gap:12px;}
.x{background:none;border:none;font-size:22px;color:var(--ink-soft);cursor:pointer;line-height:1;padding:2px 6px;}
.track{flex:1;height:6px;background:var(--line);border-radius:3px;overflow:hidden;}
.track i{display:block;height:100%;background:var(--sea);transition:width .35s;}
.q{flex:1;padding:6px 20px 20px;display:flex;flex-direction:column;}
.tag{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;}
.scene{font-size:13px;color:var(--ink-soft);margin-top:10px;line-height:1.5;}
.scene .thai{display:block;margin-top:2px;}
.ask{font-family:'Fraunces',serif;font-size:19px;font-weight:500;line-height:1.35;margin-top:8px;}
.ask .thai{display:block;font-family:'IBM Plex Sans Thai',sans-serif;font-size:13px;font-weight:400;color:var(--ink-soft);margin-top:4px;}

.guest{margin-top:16px;background:var(--card);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:0 12px 12px 0;padding:14px 16px;}
.guest .who{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);font-weight:600;}
.guest .said{font-family:'Fraunces',serif;font-size:18px;font-weight:500;margin-top:6px;line-height:1.35;}
.guest .thai{font-size:12.5px;color:var(--ink-soft);margin-top:5px;}

.audio{margin-top:12px;display:flex;gap:8px;}
.abtn{display:flex;align-items:center;gap:6px;background:var(--card);border:1px solid var(--line);border-radius:999px;padding:8px 14px;font-size:12.5px;font-weight:600;color:var(--sea);cursor:pointer;}
.abtn:active{transform:scale(.97);}

.opts{margin-top:18px;display:flex;flex-direction:column;gap:9px;}
.opt{background:var(--card);border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;text-align:left;cursor:pointer;font-size:15px;line-height:1.4;transition:border-color .12s,background .12s;width:100%;}
.opt .thai{display:block;font-size:12.5px;color:var(--ink-soft);margin-top:4px;line-height:1.45;}
.opt:hover:not(:disabled){border-color:var(--ink-soft);}
.opt:focus-visible{outline:2px solid var(--sea);outline-offset:2px;}
.opt.sel{border-color:var(--ink);background:#fff;}
.opt.right{border-color:var(--sea);background:var(--sea-tint);}
.opt.warm{border-color:var(--gold);background:var(--gold-tint);}
.opt.bad{border-color:var(--coral);background:var(--coral-tint);}
.opt:disabled{cursor:default;}

.slot{min-height:56px;border-bottom:1.5px dashed var(--line);display:flex;flex-wrap:wrap;gap:7px;padding:10px 0;align-content:flex-start;margin-top:18px;}
.hint{font-size:13px;color:var(--ink-soft);margin-top:12px;line-height:1.5;}
.bank{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px;}
.chip{background:var(--card);border:1.5px solid var(--line);border-bottom-width:3px;border-radius:9px;padding:8px 12px;font-size:15px;cursor:pointer;}
.chip:active{transform:translateY(1px);}
.chip.ghost{opacity:.28;pointer-events:none;}

.foot{padding:16px 20px 26px;border-top:1px solid var(--line);background:var(--card);}
.foot.ok{background:var(--sea-tint);border-top-color:#C9E0DA;}
.foot.warm{background:var(--gold-tint);border-top-color:#EAD6B4;}
.foot.bad{background:var(--coral-tint);border-top-color:#EBCFC7;}
.verdict{display:flex;align-items:center;gap:8px;font-family:'Fraunces',serif;font-size:16px;font-weight:700;}
.verdict.ok{color:var(--sea);} .verdict.warm{color:var(--gold);} .verdict.bad{color:var(--coral);}
.verdict .thai{font-family:'IBM Plex Sans Thai',sans-serif;font-weight:500;font-size:13px;color:var(--ink-soft);}
.note{font-size:13.5px;line-height:1.5;margin-top:8px;color:var(--ink);}
.note .thai{display:block;color:var(--ink-soft);font-size:12.5px;margin-top:3px;}
.answer{font-size:14.5px;margin-top:10px;line-height:1.45;background:rgba(255,255,255,.6);border-radius:10px;padding:11px 13px;}
.answer .lbl{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;display:block;margin-bottom:5px;}
.answer b{font-weight:600;}
.answer .thai{color:var(--ink-soft);font-size:12.5px;display:block;margin-top:4px;}

/* pronunciation coach */
.pron{margin-top:10px;background:rgba(255,255,255,.6);border-radius:10px;padding:11px 13px;}
.pron .lbl{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;}
.pron ul{list-style:none;margin-top:8px;display:flex;flex-direction:column;gap:8px;}
.pron li{font-size:13.5px;line-height:1.4;}
.pron .say{font-family:'Fraunces',serif;font-weight:700;font-size:15px;color:var(--sea);letter-spacing:.01em;}
.pron .tip{display:block;color:var(--ink-soft);font-size:12.5px;margin-top:2px;}

.cta{width:100%;margin-top:14px;padding:15px;border:none;border-radius:12px;background:var(--sea);color:#fff;font-size:15px;font-weight:600;cursor:pointer;font-family:'IBM Plex Sans','IBM Plex Sans Thai',sans-serif;}
.cta:disabled{background:var(--line);color:#9AA6A4;cursor:default;}
.cta.dark{background:var(--ink);}

.done-wrap{flex:1;display:flex;flex-direction:column;justify-content:center;padding:30px 24px 40px;text-align:center;}
.score{font-family:'Fraunces',serif;font-size:64px;font-weight:700;color:var(--sea);line-height:1;}
.score small{font-size:20px;color:var(--ink-soft);}
.done-wrap h2{font-family:'Fraunces',serif;font-size:24px;margin-top:14px;}
.done-wrap p{font-size:14px;color:var(--ink-soft);margin-top:8px;line-height:1.5;}
.recap{margin-top:24px;text-align:left;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;}
.recap h3{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;}
.recap ul{list-style:none;margin-top:10px;display:flex;flex-direction:column;gap:11px;}
.recap li{font-size:13.5px;line-height:1.45;padding-left:12px;border-left:2px solid var(--coral);}
.recap li span{display:block;color:var(--ink-soft);font-size:12px;margin-top:3px;}
.recap li button{margin-top:5px;background:none;border:none;color:var(--sea);font-size:12px;font-weight:600;cursor:pointer;padding:0;font-family:inherit;}
`;

/* ============================================================
   PRONUNCIATION COACH
   Only the words Thai speakers actually lose. No Thai script —
   Thai script cannot hold an English final consonant, and a
   dropped final consonant is the main reason a guest says
   "sorry?" Stress is marked in CAPS.
   ============================================================ */

const PRON = {
  certainly: ["SER-tuhn-lee", "Three beats, stress the first. Finish the L — not 'ser-ten-lee'.", "สามพยางค์ เน้นพยางค์แรก อย่าลืมออกเสียง L ท้ายคำ"],
  reservation: ["reh-zer-VAY-shun", "Stress the third beat. The middle is a Z sound, not S.", "เน้นพยางค์ที่สาม ตรงกลางเป็นเสียง Z ไม่ใช่ S"],
  reserved: ["ree-ZERVD", "Two beats. The end is -VD, both sounds. Hard, but the guest is listening for it.", "สองพยางค์ ท้ายคำต้องออกทั้ง V และ D"],
  allergies: ["AL-er-jeez", "Stress the first beat. Ends in a Z sound.", "เน้นพยางค์แรก ท้ายคำเป็นเสียง Z"],
  allergic: ["uh-LER-jik", "Stress the middle. Hard K at the end.", "เน้นพยางค์กลาง ท้ายคำเป็นเสียง K ชัด ๆ"],
  cutlery: ["KUT-luh-ree", "Stress the first beat. Do not say 'cut-la-lee' — it is an R.", "เน้นพยางค์แรก เป็นเสียง R ไม่ใช่ L"],
  questionnaire: ["kwes-chun-AIR", "Stress the LAST beat. Most people get this one wrong.", "เน้นพยางค์สุดท้าย คำนี้คนมักออกเสียงผิด"],
  corkage: ["KOR-kij", "Two beats, stress the first. Short second beat.", "สองพยางค์ เน้นพยางค์แรก"],
  thousand: ["THOW-zuhnd", "Tongue between the teeth for TH. Ends -ND.", "เอาลิ้นแตะฟันสำหรับเสียง TH ท้ายคำออก -ND"],
  terribly: ["TEH-ruh-blee", "Stress the first beat. Finish the -bly.", "เน้นพยางค์แรก ออกเสียง -bly ให้ครบ"],
  recommend: ["reh-kuh-MEND", "Stress the LAST beat. Ends -ND, both sounds.", "เน้นพยางค์สุดท้าย ท้ายคำออก -ND"],
  vegetables: ["VEJ-tuh-buhls", "Three beats, not four. V not W — lip on teeth.", "สามพยางค์ ไม่ใช่สี่ ใช้เสียง V ฟันแตะริมฝีปาก"],
  available: ["uh-VAY-luh-buhl", "Stress the second beat. V not W.", "เน้นพยางค์ที่สอง ใช้เสียง V ไม่ใช่ W"],
  settle: ["SET-uhl", "Two beats. Finish the L.", "สองพยางค์ ออกเสียง L ท้ายคำ"],
  signature: ["SIG-nuh-chur", "Stress the first beat.", "เน้นพยางค์แรก"],
  apologise: ["uh-POL-uh-jize", "Stress the second beat. Ends in a Z sound.", "เน้นพยางค์ที่สอง ท้ายคำเป็นเสียง Z"],
  crème: ["krem", "One beat. Just 'krem'.", "พยางค์เดียว ออกเสียงสั้น ๆ"],
  museum: ["myoo-ZEE-um", "Stress the middle beat.", "เน้นพยางค์กลาง"],
  buffet: ["BUFF-ay", "The T is silent.", "ตัว T ไม่ออกเสียง"],
  escort: ["ess-KORT", "Stress the second beat. Hard T at the end.", "เน้นพยางค์ที่สอง ท้ายคำออกเสียง T ชัด"],
  spicy: ["SPY-see", "Two beats. Ends with an S sound, not a stop.", "สองพยางค์ ท้ายคำเป็นเสียง S"],
  wonderful: ["WUN-der-full", "Stress the first beat. W not V.", "เน้นพยางค์แรก ใช้เสียง W ไม่ใช่ V"],
  delicious: ["duh-LISH-us", "Stress the middle beat.", "เน้นพยางค์กลาง"],
  arrange: ["uh-RAYNJ", "Stress the second beat. It is an R, not an L.", "เน้นพยางค์ที่สอง เป็นเสียง R ไม่ใช่ L"],
  supervisor: ["SOO-per-vy-zer", "Stress the first beat. V not W.", "เน้นพยางค์แรก ใช้เสียง V"],
  monsoon: ["mon-SOON", "Stress the second beat.", "เน้นพยางค์ที่สอง"],
  laundry: ["LAWN-dree", "Two beats. It is an R, not an L.", "สองพยางค์ เป็นเสียง R ไม่ใช่ L"],
  sirloin: ["SIR-loyn", "Stress the first beat. Ends -N.", "เน้นพยางค์แรก ท้ายคำออก -N"],
  tourists: ["TOO-rists", "Ends with -sts. Say all of it, slowly if you must.", "ท้ายคำออก -sts ให้ครบ ช้าได้ แต่ต้องครบ"],
  privacy: ["PRIV-uh-see", "Stress the first beat.", "เน้นพยางค์แรก"],
  // Maintenance / Engineering vocabulary
  maintenance: ["MAIN-tuh-nunce", "Stress the first beat — MAIN. Three beats, not 'main-ten-ance'.", "เน้นพยางค์แรก MAIN สามพยางค์ ไม่ใช่ 'เมน-เท็น-แนนซ์'"],
  technician: ["tek-NISH-un", "Stress the second beat. The middle is 'nish'.", "เน้นพยางค์ที่สอง ตรงกลางออกเสียง 'นิช'"],
  replace: ["ree-PLACE", "Stress the second beat. It is an R, not an L, and finish the -CE.", "เน้นพยางค์ที่สอง เป็นเสียง R ไม่ใช่ L และออกเสียง -CE ท้ายคำ"],
  disturb: ["dih-STURB", "Stress the second beat. End with -RB, both sounds.", "เน้นพยางค์ที่สอง ท้ายคำออกทั้ง R และ B"],
  disturbance: ["dih-STUR-buns", "Stress the second beat.", "เน้นพยางค์ที่สอง"],
  railing: ["RAY-ling", "Starts with R, not L. Two beats.", "ขึ้นต้นด้วยเสียง R ไม่ใช่ L สองพยางค์"],
  wiring: ["WY-ring", "W not V — round the lips, do not touch the teeth.", "ใช้เสียง W ไม่ใช่ V ห่อริมฝีปาก ไม่ใช่ฟันแตะปาก"],
  leak: ["leek", "One beat. Finish the hard K — not 'lee'.", "พยางค์เดียว ออกเสียง K ท้ายให้ชัด ไม่ใช่ 'ลี'"],
  drain: ["drayn", "One beat. Ends -N. Say the d and r together.", "พยางค์เดียว ท้ายออก -N ออกเสียง d กับ r ติดกัน"],
  immediately: ["ih-MEE-dee-it-lee", "Stress the second beat. Take it slowly — five beats.", "เน้นพยางค์ที่สอง ค่อย ๆ ออก ห้าพยางค์"],
  switch: ["swich", "One beat. Starts sw-, ends -TCH. Not 'sic'.", "พยางค์เดียว ขึ้นต้น sw- ท้ายออก -TCH ไม่ใช่ 'สิช'"],
  secure: ["sih-KYOOR", "Stress the second beat. Ends in an R.", "เน้นพยางค์ที่สอง ท้ายคำออกเสียง R"],
  spark: ["spark", "One beat. Ends -RK — say both sounds.", "พยางค์เดียว ท้ายออก -RK ให้ครบ"],
  fridge: ["frij", "One beat. Ends with a J sound.", "พยางค์เดียว ท้ายออกเสียง J"],
  insulin: ["IN-suh-lin", "Stress the first beat.", "เน้นพยางค์แรก"]
};
const findPron = sentence => {
  const words = sentence.toLowerCase().replace(/[^a-zà-ÿ\s]/g, " ").split(/\s+/);
  const hits = [];
  for (const w of words) {
    if (PRON[w] && !hits.find(h => h.word === w)) {
      hits.push({
        word: w,
        say: PRON[w][0],
        tip: PRON[w][1],
        tipTh: PRON[w][2]
      });
    }
    if (hits.length === 2) break;
  }
  return hits;
};

/* ============================================================
   CONTENT RESOLVER
   The lessons no longer live in this file. They live in content/
   (see docs/SCHEMA.md) and are compiled into the app by build.js,
   which reads every content/ JSON and injects it here as `CONTENT`.

   buildCurriculum() turns a property + role into the module list the
   UI renders: it resolves the role's units, substitutes {{tokens}}
   from the property's facts (language-aware — an English field gets
   the token's .en, a Thai field its .th), and can prepend the shared
   core units a role inherits.

   v: "best" = full marks — the magic-word answer
      "ok"   = correct English, flat service. Half marks.
      "bad"  = wrong, or a sensitive phrase we never say.
   ============================================================ */

/* A field is Thai if its key is "th" or ends in "Th" (sceneTh, askTh, nTh). */
const isThaiKey = k => k === "th" || /Th$/.test(k);

/* Replace {{token}} with the property fact, in the right language.
   A fact is either a plain string (same both languages) or { en, th }. */
const substStr = (s, vars, lang) => s.replace(/\{\{([^}]+)\}\}/g, (m, key) => {
  const v = vars[key.trim()];
  if (v == null) return m;
  if (typeof v === "object") return v[lang] != null ? v[lang] : v.en != null ? v.en : m;
  return v;
});

/* Walk a unit, substituting tokens. lang flips to "th" under a Thai key
   and to "en" under an "en" key, so every string resolves in its own tongue. */
const substNode = (node, vars, lang) => {
  if (typeof node === "string") return substStr(node, vars, lang);
  if (Array.isArray(node)) return node.map(x => substNode(x, vars, lang));
  if (node && typeof node === "object") {
    const out = {};
    for (const k of Object.keys(node)) {
      const childLang = isThaiKey(k) ? "th" : k === "en" ? "en" : lang;
      out[k] = substNode(node[k], vars, childLang);
    }
    return out;
  }
  return node;
};

/* property + role -> the [{ id, en, th, questions }] the UI expects.
   includeCore prepends the inherited core units. It is off for now: the
   core is still placeholder content (roadmap #3 — fill from the Magic Word
   and Sensitive Word documents), and the F&B app must stay as it is until
   then. Flip it to true once the core is written and every role inherits it. */
const buildCurriculum = (content, propertyId, roleId, opts) => {
  opts = opts || {};
  if (!content || !content.roles || !content.roles[roleId]) return [];
  const property = content.properties[propertyId] || {};
  const vars = property.vars || {};
  const role = content.roles[roleId];
  let units = [];
  if (opts.includeCore && Array.isArray(role.inherits)) {
    for (const coreId of role.inherits) {
      const core = content.roles[coreId];
      if (core && Array.isArray(core.units)) units = units.concat(core.units);
    }
  }
  units = units.concat(role.units || []);
  return units.map(u => {
    const r = substNode(u, vars, "en");
    return {
      id: r.id,
      en: r.name.en,
      th: r.name.th,
      questions: r.questions
    };
  });
};

/* build.js injects `const CONTENT = {...}` (compiled from content/) ahead of
   this file. The guard keeps the raw .jsx harmless if it is ever run un-built. */
const C = typeof CONTENT !== "undefined" ? CONTENT : {
  catalogue: {
    departments: [],
    properties: [],
    roles: {}
  },
  properties: {},
  roles: {}
};

/* ============================================================
   SELECTION — hotel, then department, then role.
   All of it reads the catalogue (the org chart) that ships inside
   CONTENT. A hotel/department/role is "available" only if it has real
   lessons behind it; everything else shows but is marked Coming soon,
   so the whole collection is visible from day one.
   ============================================================ */

/* A role is playable once its file has at least one unit of questions. */
const roleAvailable = roleId => !!(C.roles[roleId] && C.roles[roleId].units && C.roles[roleId].units.length);

/* A property whose facts still say "FILL ME" would render placeholders in
   the lessons, so it is not ready even if it inherits a built role. */
const propertyReady = propertyId => {
  const facts = C.properties[propertyId] && C.properties[propertyId].vars || {};
  return !Object.keys(facts).some(k => {
    const v = facts[k];
    const s = typeof v === "object" && v ? [v.en, v.th].join(" ") : String(v);
    return /FILL ME/i.test(s);
  });
};
const assignmentsOf = propertyId => {
  const p = (C.catalogue.properties || []).find(x => x.id === propertyId);
  return p && p.assignments || [];
};
const propertyAvailable = propertyId => propertyReady(propertyId) && assignmentsOf(propertyId).some(a => roleAvailable(a.role));
const listProperties = () => (C.catalogue.properties || []).map(p => ({
  id: p.id,
  name: C.properties[p.id] && C.properties[p.id].name || {
    en: p.id,
    th: p.id
  },
  available: propertyAvailable(p.id)
}));
const deptName = deptId => {
  const d = (C.catalogue.departments || []).find(x => x.id === deptId);
  return d && d.name || {
    en: deptId,
    th: deptId
  };
};

/* Departments a property actually has, in catalogue order, deduped.
   A department is available if any of its roles is. */
const listDepartments = propertyId => {
  const rows = [];
  for (const a of assignmentsOf(propertyId)) {
    let row = rows.find(x => x.id === a.department);
    if (!row) {
      row = {
        id: a.department,
        name: deptName(a.department),
        available: false
      };
      rows.push(row);
    }
    if (roleAvailable(a.role)) row.available = true;
  }
  return rows;
};

/* Label priority: the per-assignment override (e.g. Melon Minimart, Resort
   Host), then a built role's own name, then the catalogue name registry. */
const roleLabel = (roleId, labelOverride) => labelOverride || C.roles[roleId] && C.roles[roleId].name || C.catalogue.roles && C.catalogue.roles[roleId] || {
  en: roleId,
  th: roleId
};
const listRoles = (propertyId, departmentId) => assignmentsOf(propertyId).filter(a => a.department === departmentId).map(a => ({
  id: a.role,
  name: roleLabel(a.role, a.labelOverride),
  available: roleAvailable(a.role)
}));

/* ============================================================ */

const shuffle = a => {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
};

/* ------------------------------------------------------------
   SPEECH ENGINE
   Three things break browser speech, and all three bite here:
   1. Voices load asynchronously — speak() before they arrive = silence.
   2. iOS Safari refuses to speak until it has spoken once inside a
      real tap. So we "unlock" with a silent utterance on first touch.
   3. The iPhone side mute switch silences speech entirely. Nothing
      we can do in code — but we can tell the user.
   ------------------------------------------------------------ */

const SPEECH = {
  engine: typeof window !== "undefined" ? window.speechSynthesis : null,
  voice: null,
  audio: null,
  unlocked: false,
  ready: false
};

/* Pick the phone's best American voice for the synthetic fallback: prefer an
   en-US voice, and among those an enhanced / neural / Siri one if the phone
   has it downloaded (iOS: Settings > Accessibility > Spoken Content > Voices). */
const pickVoice = () => {
  if (!SPEECH.engine) return;
  const vs = SPEECH.engine.getVoices() || [];
  if (!vs.length) return;
  const us = vs.filter(v => /en[-_]US/i.test(v.lang));
  SPEECH.voice = us.find(v => /(neural|natural|enhanced|premium|siri)/i.test(v.name)) || us[0] || vs.find(v => /^en/i.test(v.lang)) || vs[0];
  SPEECH.ready = true;
};
if (SPEECH.engine) {
  pickVoice();
  SPEECH.engine.onvoiceschanged = pickVoice;
}

/* iOS will not speak unless the first utterance happens inside a tap. */
const unlockSpeech = () => {
  if (!SPEECH.engine || SPEECH.unlocked) return;
  try {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    SPEECH.engine.speak(u);
    SPEECH.unlocked = true;
    pickVoice();
  } catch (e) {
    /* nothing to unlock */
  }
};

/* ============================================================
   PRE-GENERATED VOICE-OVER
   The robotic phone voice drops the final consonants staff most
   need to hear, which is the whole reason the PRON coach exists.
   So we bake a real American voice at build time (Azure Neural TTS,
   scripts/generate-audio.js) into audio/<hash>.mp3, cache it in the
   service worker, and play it when we have it — falling back to the
   phone's own voice when we don't. build.js injects AUDIO_MANIFEST
   from the audio/ folder; it is empty until the audio is generated.
   ============================================================ */

/* The exact normalisation applied before both speaking and hashing.
   The audio generator applies the identical steps, so a line and its
   clip agree on a filename with no lookup table shipped. */
const cleanForSpeech = text => text.replace(/\[.*?\]/g, "").replace(/[—–]/g, ",").replace(/[“”‘’]/g, "").trim();

/* cyrb53 — a tiny, fast, deterministic string hash. generate-audio.js
   uses this same function, byte for byte, to name each clip. */
const hashText = str => {
  let h1 = 0xdeadbeef,
    h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  const n = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return n.toString(36);
};
const AUDIO_SET = new Set(typeof AUDIO_MANIFEST !== "undefined" ? AUDIO_MANIFEST : []);

/* The phone's own synthetic voice — the fallback when we have no clip. */
const saySynthetic = (clean, slow) => {
  const s = SPEECH.engine;
  if (!s || !clean) return false;
  try {
    unlockSpeech();
    s.cancel();
    s.resume(); // Chrome sometimes parks the queue
    const u = new SpeechSynthesisUtterance(clean);
    if (SPEECH.voice) u.voice = SPEECH.voice;
    u.lang = SPEECH.voice ? SPEECH.voice.lang : "en-US";
    u.rate = slow ? 0.55 : 0.92;
    u.volume = 1;
    u.pitch = 1;
    s.speak(u);
    return true;
  } catch (e) {
    return false;
  }
};
const say = (text, slow) => {
  if (!text) return false;
  const clean = cleanForSpeech(text);

  /* Prefer the real, pre-generated American voice when we have the clip. */
  if (AUDIO_SET.has(hashText(clean)) && typeof Audio !== "undefined") {
    try {
      if (SPEECH.engine) SPEECH.engine.cancel(); // silence any synthetic speech
      if (SPEECH.audio) {
        SPEECH.audio.pause();
        SPEECH.audio.currentTime = 0;
      }
      const a = new Audio("audio/" + hashText(clean) + ".mp3");
      a.playbackRate = slow ? 0.7 : 1;
      SPEECH.audio = a;
      a.play().catch(() => saySynthetic(clean, slow)); // fall back if playback is blocked
      return true;
    } catch (e) {
      /* fall through to the synthetic voice */
    }
  }
  return saySynthetic(clean, slow);
};
const speechAvailable = () => !!SPEECH.engine;
const POINTS = {
  best: 10,
  ok: 5,
  bad: 0
};
const sentenceOf = q => q.type === "order" ? q.words.join(" ") : q.sentence.join(" ").replace("____", q.answer);

/* ============================================================ */

function App() {
  /* property -> department -> role -> home (that role's lessons) -> lesson */
  const [view, setView] = useState("property");
  const [propertyId, setPropertyId] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [roleId, setRoleId] = useState(null);
  const [activeId, setActiveId] = useState(null);

  /* One store for everyone: { thaiOn, roles: { "property/role": { progress, xp } } } */
  const [store, setStore] = useState({
    thaiOn: true,
    roles: {}
  });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      let next = null;
      try {
        const r = await window.storage.get("katathani_lingo_v3");
        if (r && r.value) next = JSON.parse(r.value);
      } catch (e) {
        /* no v3 yet */
      }
      if (!next) {
        /* migrate the old F&B-only save so no one loses their progress */
        try {
          const old = await window.storage.get("sands_fb_english_v2");
          if (old && old.value) {
            const d = JSON.parse(old.value);
            next = {
              thaiOn: typeof d.thaiOn === "boolean" ? d.thaiOn : true,
              roles: {
                "sands/fb-restaurant-service": {
                  progress: d.progress || {},
                  xp: d.xp || 0
                }
              }
            };
          }
        } catch (e2) {
          /* first run ever */
        }
      }
      if (!next) next = {
        thaiOn: true,
        roles: {}
      };
      if (!next.roles) next.roles = {};
      if (typeof next.thaiOn !== "boolean") next.thaiOn = true;
      setStore(next);
      setLoaded(true);
    })();
  }, []);
  const persist = async s => {
    try {
      await window.storage.set("katathani_lingo_v3", JSON.stringify(s));
    } catch (e) {
      /* in-memory only */
    }
  };
  const curKey = propertyId && roleId ? propertyId + "/" + roleId : null;
  const roleState = curKey && store.roles[curKey] || {
    progress: {},
    xp: 0
  };
  const totalXp = Object.keys(store.roles).reduce((n, k) => n + (store.roles[k].xp || 0), 0);
  const finish = (modId, earned, maxPts) => {
    if (!curKey) return;
    const pct = Math.round(earned / maxPts * 100);
    const prev = store.roles[curKey] || {
      progress: {},
      xp: 0
    };
    const progress = {
      ...prev.progress,
      [modId]: {
        pct: Math.max(pct, prev.progress[modId]?.pct || 0)
      }
    };
    const s = {
      ...store,
      roles: {
        ...store.roles,
        [curKey]: {
          progress,
          xp: (prev.xp || 0) + earned
        }
      }
    };
    setStore(s);
    persist(s);
  };
  const toggleThai = () => {
    const s = {
      ...store,
      thaiOn: !store.thaiOn
    };
    setStore(s);
    persist(s);
  };
  const modules = useMemo(() => propertyId && roleId ? buildCurriculum(C, propertyId, roleId) : [], [propertyId, roleId]);
  const active = modules.find(m => m.id === activeId);
  const property = propertyId ? {
    id: propertyId,
    name: C.properties[propertyId] && C.properties[propertyId].name || {
      en: propertyId,
      th: propertyId
    }
  } : null;
  const selectedRoleName = () => {
    const a = assignmentsOf(propertyId).find(x => x.role === roleId && x.department === departmentId);
    return roleLabel(roleId, a && a.labelOverride);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "se-root"
  }, /*#__PURE__*/React.createElement("style", null, STYLES), /*#__PURE__*/React.createElement("div", {
    className: "se-phone"
  }, loaded && view === "property" && /*#__PURE__*/React.createElement(Picker, {
    title: "Which hotel?",
    titleTh: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    thaiOn: store.thaiOn,
    items: listProperties(),
    onPick: id => {
      setPropertyId(id);
      setDepartmentId(null);
      setRoleId(null);
      setView("department");
    }
  }), loaded && view === "department" && /*#__PURE__*/React.createElement(Picker, {
    title: "Which department?",
    titleTh: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1C\u0E19\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    thaiOn: store.thaiOn,
    items: listDepartments(propertyId),
    onBack: () => setView("property"),
    onPick: id => {
      setDepartmentId(id);
      setRoleId(null);
      setView("role");
    }
  }), loaded && view === "role" && /*#__PURE__*/React.createElement(Picker, {
    title: "Which role?",
    titleTh: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    thaiOn: store.thaiOn,
    items: listRoles(propertyId, departmentId),
    onBack: () => setView("department"),
    onPick: id => {
      setRoleId(id);
      setActiveId(null);
      setView("home");
    }
  }), loaded && view === "home" && /*#__PURE__*/React.createElement(Home, {
    modules: modules,
    property: property,
    roleName: selectedRoleName(),
    progress: roleState.progress,
    xp: totalXp,
    thaiOn: store.thaiOn,
    toggleThai: toggleThai,
    onBack: () => setView("role"),
    onPick: id => {
      setActiveId(id);
      setView("lesson");
    }
  }), loaded && view === "lesson" && active && /*#__PURE__*/React.createElement(Lesson, {
    key: active.id,
    module: active,
    thaiOn: store.thaiOn,
    onQuit: () => setView("home"),
    onDone: (e, m) => finish(active.id, e, m),
    onHome: () => setView("home")
  })));
}

/* ---------------- PICKER (hotel / department / role) ---------------- */

function Picker({
  title,
  titleTh,
  items,
  onPick,
  onBack,
  thaiOn
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    className: "x",
    onClick: onBack,
    "aria-label": "Back"
  }, "\u2039") : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hd",
    style: {
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Katathani Lingo"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Learn. Practice. Serve."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2px 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 20,
      fontWeight: 700
    }
  }, title), thaiOn && /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, titleTh)), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "mod" + (it.available ? "" : " soon"),
    disabled: !it.available,
    onClick: () => it.available && onPick(it.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "en"
  }, it.name.en), thaiOn && /*#__PURE__*/React.createElement("div", {
    className: "thai th"
  }, it.name.th)), it.available ? /*#__PURE__*/React.createElement("span", {
    className: "chev"
  }, "\u203A") : /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, thaiOn ? "Coming soon · เร็ว ๆ นี้" : "Coming soon")))));
}

/* ---------------- HOME ---------------- */

function Home({
  modules,
  property,
  roleName,
  progress,
  xp,
  thaiOn,
  toggleThai,
  onPick,
  onBack
}) {
  const totalQ = modules.reduce((n, m) => n + m.questions.length, 0);
  const [sound, setSound] = useState(null); // null | "ok" | "none"
  const hotelEn = property && property.name.en || "our hotel";
  const roleEn = roleName && roleName.en || "";
  const roleTh = roleName && roleName.th || "";
  const testSound = () => {
    if (!speechAvailable()) {
      setSound("none");
      return;
    }
    const spoke = say("Good evening. Welcome to " + hotelEn + ".");
    setSound(spoke ? "ok" : "none");
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "x",
    onClick: onBack,
    "aria-label": "Change hotel or department"
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hd",
    style: {
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Katathani Lingo"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Learn. Practice. Serve.")), /*#__PURE__*/React.createElement("div", {
    className: "xp"
  }, xp, /*#__PURE__*/React.createElement("small", null, "XP"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 14px",
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)",
      fontWeight: 600
    }
  }, hotelEn, roleEn ? " · " + roleEn : ""), thaiOn && roleTh && /*#__PURE__*/React.createElement("span", {
    className: "th",
    style: {
      display: "block"
    }
  }, roleTh), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 3
    }
  }, totalQ, " real situations from the floor."), /*#__PURE__*/React.createElement("span", {
    className: "th",
    style: {
      display: "block"
    }
  }, totalQ, " \u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E08\u0E23\u0E34\u0E07\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E49\u0E32\u0E07\u0E32\u0E19 \u0E1D\u0E36\u0E01\u0E27\u0E31\u0E19\u0E25\u0E30 5 \u0E19\u0E32\u0E17\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32\u0E01\u0E30")), /*#__PURE__*/React.createElement("button", {
    className: "thai-toggle" + (thaiOn ? " on" : ""),
    onClick: toggleThai
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw"
  }, /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
    className: "lb"
  }, thaiOn ? "Thai meaning shown" : "English only", /*#__PURE__*/React.createElement("span", {
    className: "th"
  }, thaiOn ? "แสดงคำแปลภาษาไทย" : "ซ่อนคำแปล — ทดสอบตัวเอง"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "abtn",
    onClick: testSound,
    style: {
      width: "100%",
      justifyContent: "center",
      padding: "11px"
    }
  }, "\u25D7 Test the sound \xB7 \u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07"), sound === "ok" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "You should have heard \u201CGood evening. Welcome to ", hotelEn, ".\u201D If not, check the side switch on your phone and turn the volume up \u2014 the silent switch mutes speech.", /*#__PURE__*/React.createElement("span", {
    className: "th",
    style: {
      display: "block"
    }
  }, "\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E22\u0E34\u0E19 \u0E43\u0E2B\u0E49\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2A\u0E27\u0E34\u0E15\u0E0A\u0E4C\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07")), sound === "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--coral)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "This browser has no speech voice. Try opening the app in Chrome or Safari directly.", /*#__PURE__*/React.createElement("span", {
    className: "th",
    style: {
      display: "block"
    }
  }, "\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E1E\u0E39\u0E14 \u0E25\u0E2D\u0E07\u0E40\u0E1B\u0E34\u0E14\u0E41\u0E2D\u0E1B\u0E43\u0E19 Chrome \u0E2B\u0E23\u0E37\u0E2D Safari \u0E42\u0E14\u0E22\u0E15\u0E23\u0E07"))), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, modules.map((m, i) => {
    const pct = progress[m.id]?.pct || 0;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      className: "mod",
      onClick: () => onPick(m.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "num" + (pct >= 80 ? " done" : "")
    }, pct >= 80 ? "✓" : String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
      className: "body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "en"
    }, m.en), /*#__PURE__*/React.createElement("div", {
      className: "thai th"
    }, m.th), /*#__PURE__*/React.createElement("div", {
      className: "meta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar"
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: pct + "%"
      }
    })), /*#__PURE__*/React.createElement("span", null, pct ? pct + "%" : m.questions.length + " questions"))));
  })));
}

/* ---------------- LESSON ---------------- */

function Lesson({
  module: mod,
  thaiOn,
  onQuit,
  onDone,
  onHome
}) {
  const [i, setI] = useState(0);
  const [earned, setEarned] = useState(0);
  const [misses, setMisses] = useState([]);
  const [state, setState] = useState("asking");
  const [picked, setPicked] = useState(null);
  const [built, setBuilt] = useState([]);
  const doneRef = useRef(false);
  const q = mod.questions[i];
  const max = mod.questions.length * 10;
  const opts = useMemo(() => q && q.options ? shuffle(q.options) : [], [i]); // eslint-disable-line
  const bank = useMemo(() => q && q.words ? shuffle(q.words) : q && q.pool ? shuffle(q.pool) : [], [i]); // eslint-disable-line

  useEffect(() => {
    setPicked(null);
    setBuilt([]);
    setState("asking");
  }, [i]);
  if (state === "finished") {
    const pct = Math.round(earned / max * 100);
    if (!doneRef.current) {
      doneRef.current = true;
      onDone(earned, max);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "top"
    }, /*#__PURE__*/React.createElement("button", {
      className: "x",
      onClick: onHome
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      className: "done-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "score"
    }, pct, /*#__PURE__*/React.createElement("small", null, "%")), /*#__PURE__*/React.createElement("h2", null, pct >= 90 ? "Excellent." : pct >= 70 ? "Good work." : "Keep practising."), /*#__PURE__*/React.createElement("p", null, earned, " of ", max, " points \xB7 ", mod.en, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "th"
    }, pct >= 90 ? "เยี่ยมมาก พร้อมขึ้นกะแล้ว" : pct >= 70 ? "ดีแล้ว ลองอีกครั้งให้ได้ 90%" : "ลองทำอีกรอบนะคะ")), misses.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "recap"
    }, /*#__PURE__*/React.createElement("h3", null, "Worth remembering \xB7 \u0E04\u0E27\u0E23\u0E08\u0E33\u0E44\u0E27\u0E49"), /*#__PURE__*/React.createElement("ul", null, misses.map((m, k) => /*#__PURE__*/React.createElement("li", {
      key: k
    }, m.correct, /*#__PURE__*/React.createElement("span", {
      className: "th"
    }, m.th), /*#__PURE__*/React.createElement("button", {
      onClick: () => say(m.correct)
    }, "\u25D7 Hear it"))))), /*#__PURE__*/React.createElement("button", {
      className: "cta",
      onClick: onHome,
      style: {
        marginTop: 22
      }
    }, "Back to units \xB7 \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01")));
  }
  const judgeChoice = o => {
    if (state !== "asking") return;
    setPicked(o);
    setState("judged");
    setEarned(e => e + POINTS[o.v]);
    const best = q.options.find(x => x.v === "best");
    if (o.v !== "best") setMisses(m => [...m, {
      correct: best.t,
      th: best.th
    }]);else say(o.t);
  };
  const judgeBuild = () => {
    const target = q.type === "order" ? q.words : [q.answer];
    const good = built.join(" ") === target.join(" ");
    setPicked({
      v: good ? "best" : "bad"
    });
    setState("judged");
    setEarned(e => e + (good ? 10 : 0));
    if (!good) setMisses(m => [...m, {
      correct: sentenceOf(q),
      th: q.th
    }]);else say(sentenceOf(q));
  };
  const next = () => {
    if (i + 1 >= mod.questions.length) setState("finished");else setI(i + 1);
  };
  const cls = picked ? picked.v === "best" ? "ok" : picked.v === "ok" ? "warm" : "bad" : "";
  const canSubmit = q.type === "order" ? built.length === q.words.length : q.type === "gap" ? built.length === 1 : false;
  const bestLine = q.type === "choice" || q.type === "guest" ? q.options.find(o => o.v === "best") : null;
  const targetSentence = bestLine ? bestLine.t : sentenceOf(q);
  const prons = state === "judged" ? findPron(targetSentence) : [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "x",
    onClick: onQuit
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: (i + (state === "judged" ? 1 : 0)) / mod.questions.length * 100 + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      fontWeight: 600,
      minWidth: 34,
      textAlign: "right"
    }
  }, i + 1, "/", mod.questions.length)), /*#__PURE__*/React.createElement("div", {
    className: "q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tag"
  }, mod.en), /*#__PURE__*/React.createElement("div", {
    className: "scene"
  }, q.scene, thaiOn && /*#__PURE__*/React.createElement("span", {
    className: "thai th"
  }, q.sceneTh)), /*#__PURE__*/React.createElement("div", {
    className: "ask"
  }, q.ask, thaiOn && /*#__PURE__*/React.createElement("span", {
    className: "thai th"
  }, q.askTh)), q.guest && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "guest"
  }, /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, "The guest says \xB7 \u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E1E\u0E39\u0E14\u0E27\u0E48\u0E32"), /*#__PURE__*/React.createElement("div", {
    className: "said"
  }, "\u201C", q.guest.en, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "thai th"
  }, q.guest.th)), /*#__PURE__*/React.createElement("div", {
    className: "audio"
  }, /*#__PURE__*/React.createElement("button", {
    className: "abtn",
    onClick: () => say(q.guest.en)
  }, "\u25D7 Hear it"), /*#__PURE__*/React.createElement("button", {
    className: "abtn",
    onClick: () => say(q.guest.en, true)
  }, "\u25D7 Slowly"))), (q.type === "choice" || q.type === "guest") && /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, opts.map((o, k) => {
    let c = "opt";
    if (state === "judged") {
      if (o.v === "best") c += " right";else if (picked === o && o.v === "ok") c += " warm";else if (picked === o && o.v === "bad") c += " bad";
    } else if (picked === o) c += " sel";
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: c,
      disabled: state === "judged",
      onClick: () => judgeChoice(o)
    }, o.t, thaiOn && /*#__PURE__*/React.createElement("span", {
      className: "thai th"
    }, o.th));
  })), q.type === "order" && /*#__PURE__*/React.createElement(React.Fragment, null, thaiOn && /*#__PURE__*/React.createElement("div", {
    className: "hint th"
  }, q.th), /*#__PURE__*/React.createElement("div", {
    className: "slot"
  }, built.map((w, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: "chip",
    disabled: state === "judged",
    onClick: () => setBuilt(built.filter((_, x) => x !== k))
  }, w))), /*#__PURE__*/React.createElement("div", {
    className: "bank"
  }, bank.map((w, k) => {
    const usedCount = built.filter(b => b === w).length;
    const bankCount = bank.slice(0, k + 1).filter(b => b === w).length;
    const used = bankCount <= usedCount;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: "chip" + (used ? " ghost" : ""),
      disabled: state === "judged",
      onClick: () => setBuilt([...built, w])
    }, w);
  }))), q.type === "gap" && /*#__PURE__*/React.createElement(React.Fragment, null, thaiOn && /*#__PURE__*/React.createElement("div", {
    className: "hint th"
  }, q.th), /*#__PURE__*/React.createElement("div", {
    className: "slot",
    style: {
      borderBottom: "none",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fraunces, serif",
      fontSize: 19,
      lineHeight: 1.6
    }
  }, q.sentence[0], " ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "2px solid var(--sea)",
      padding: "0 10px",
      color: built[0] ? "var(--sea)" : "var(--line)",
      fontWeight: 700,
      cursor: "pointer"
    },
    onClick: () => setBuilt([])
  }, built[0] || "\u00A0\u00A0\u00A0\u00A0\u00A0"), " ", q.sentence[2])), /*#__PURE__*/React.createElement("div", {
    className: "bank"
  }, bank.map((w, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: "chip" + (built[0] === w ? " ghost" : ""),
    disabled: state === "judged",
    onClick: () => setBuilt([w])
  }, w))))), /*#__PURE__*/React.createElement("div", {
    className: "foot " + cls
  }, state === "asking" && (q.type === "order" || q.type === "gap") && /*#__PURE__*/React.createElement("button", {
    className: "cta",
    disabled: !canSubmit,
    onClick: judgeBuild
  }, "Check \xB7 \u0E15\u0E23\u0E27\u0E08\u0E04\u0E33\u0E15\u0E2D\u0E1A"), state === "asking" && (q.type === "choice" || q.type === "guest") && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      textAlign: "center",
      lineHeight: 1.5
    }
  }, "Choose what you would actually say to the guest.", /*#__PURE__*/React.createElement("span", {
    className: "th",
    style: {
      display: "block"
    }
  }, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E04\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E08\u0E30\u0E1E\u0E39\u0E14\u0E01\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E08\u0E23\u0E34\u0E07 \u0E46")), state === "judged" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "verdict " + cls
  }, picked.v === "best" && /*#__PURE__*/React.createElement("span", null, "\u2713 That is the one. ", /*#__PURE__*/React.createElement("span", {
    className: "th"
  }, "\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07")), picked.v === "ok" && /*#__PURE__*/React.createElement("span", null, "\u25D0 Correct \u2014 but there is a warmer way. ", /*#__PURE__*/React.createElement("span", {
    className: "th"
  }, "\u0E16\u0E39\u0E01 \u0E41\u0E15\u0E48\u0E22\u0E31\u0E07\u0E21\u0E35\u0E27\u0E34\u0E18\u0E35\u0E1E\u0E39\u0E14\u0E17\u0E35\u0E48\u0E2D\u0E1A\u0E2D\u0E38\u0E48\u0E19\u0E01\u0E27\u0E48\u0E32\u0E19\u0E35\u0E49")), picked.v === "bad" && /*#__PURE__*/React.createElement("span", null, "\u2715 Not this one. ", /*#__PURE__*/React.createElement("span", {
    className: "th"
  }, "\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E02\u0E49\u0E2D\u0E19\u0E35\u0E49"))), picked.n && /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, picked.n, thaiOn && /*#__PURE__*/React.createElement("span", {
    className: "thai th"
  }, picked.nTh)), /*#__PURE__*/React.createElement("div", {
    className: "answer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Say this \xB7 \u0E43\u0E2B\u0E49\u0E1E\u0E39\u0E14\u0E41\u0E1A\u0E1A\u0E19\u0E35\u0E49"), /*#__PURE__*/React.createElement("b", null, targetSentence), /*#__PURE__*/React.createElement("span", {
    className: "thai th"
  }, bestLine ? bestLine.th : q.th), /*#__PURE__*/React.createElement("div", {
    className: "audio",
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "abtn",
    onClick: () => say(targetSentence)
  }, "\u25D7 Hear it"), /*#__PURE__*/React.createElement("button", {
    className: "abtn",
    onClick: () => say(targetSentence, true)
  }, "\u25D7 Slowly"))), prons.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pron"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Say it right \xB7 \u0E2D\u0E2D\u0E01\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E49\u0E16\u0E39\u0E01"), /*#__PURE__*/React.createElement("ul", null, prons.map((p, k) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "say"
  }, p.say), /*#__PURE__*/React.createElement("span", {
    className: "tip"
  }, p.tip, thaiOn && /*#__PURE__*/React.createElement("span", {
    className: "th",
    style: {
      display: "block"
    }
  }, p.tipTh)))))), /*#__PURE__*/React.createElement("button", {
    className: "cta dark",
    onClick: next
  }, i + 1 >= mod.questions.length ? "Finish · จบบทเรียน" : "Continue · ทำต่อ"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));