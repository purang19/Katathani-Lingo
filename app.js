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
      "fo-resort-host": {
        "en": "Resort Host",
        "th": "รีสอร์ทโฮสต์"
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
        "role": "fo-resort-host"
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
        "outlet.signature": {
          "en": "Talay",
          "th": "ทะเล"
        },
        "outlet.signature.pitch": "right on the beach, with live music and a fresh seafood display",
        "outlet.buffet": "Floating Market",
        "outlet.poolBar": "Coconut Pool Bar",
        "outlet.bars": "the Pineapple Bar and the Mango Bar",
        "outlet.shop": "Melon Minimart",
        "buffet.showNights": "Tuesday, Thursday and Saturday",
        "buffet.showTime": "7:30 p.m.",
        "bar.happyHour": "4:30 to 6:00 p.m.",
        "charge.corkage": {
          "en": "300 baht",
          "th": "300 บาท"
        },
        "local.market": {
          "en": "Bang Niang market",
          "th": "ตลาดบางเนียง"
        },
        "local.marketDays": {
          "en": "Monday, Wednesday, Thursday and Saturday",
          "th": "วันจันทร์ พุธ พฤหัสบดี และเสาร์"
        },
        "local.marketHours": {
          "en": "2 to 9 p.m.",
          "th": "14:00 ถึง 21:00 น."
        },
        "local.museum": {
          "en": "the Tsunami Museum",
          "th": "พิพิธภัณฑ์สึนามิ"
        }
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
        "id": "welcome",
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
            "th": "สวัสดีค่ะ ยินดีต้อนรับสู่ห้องอาหาร{{outlet.signature}} คุณได้จองโต๊ะไว้หรือไม่คะ",
            "v": "best",
            "n": "Greeting, restaurant name, then the question. This is the full standard.",
            "nTh": "ทักทาย บอกชื่อห้องอาหาร แล้วค่อยถาม นี่คือมาตรฐานเต็มรูปแบบ"
          }, {
            "t": "Hello. Do you have a reservation?",
            "th": "สวัสดี คุณจองไว้ไหม",
            "v": "ok",
            "n": "Correct English, but cold. The wai and the welcome are what the guest remembers.",
            "nTh": "ภาษาถูก แต่เย็นชา สิ่งที่ลูกค้าจำได้คือการไหว้และการต้อนรับ"
          }, {
            "t": "You have booking or not?",
            "th": "คุณจองหรือไม่จอง",
            "v": "bad",
            "n": "Sounds like an interrogation. Always: Do you have a reservation?",
            "nTh": "ฟังดูเหมือนสอบสวน ให้ใช้ Do you have a reservation? เสมอ"
          }, {
            "t": "Yes? What do you want?",
            "th": "อะไรคะ ต้องการอะไร",
            "v": "bad",
            "n": "Never open with this. It reads as annoyed.",
            "nTh": "ห้ามเปิดด้วยประโยคนี้ ฟังดูรำคาญ"
          }]
        }, {
          "type": "choice",
          "scene": "The guests have no reservation and the restaurant has space.",
          "sceneTh": "ลูกค้าไม่ได้จองมา และห้องอาหารยังมีโต๊ะว่าง",
          "ask": "Offer them a choice of table.",
          "askTh": "เสนอทางเลือกเรื่องโต๊ะให้ลูกค้า",
          "options": [{
            "t": "Certainly. Would you prefer a table indoors or outdoors?",
            "th": "ได้ค่ะ คุณต้องการนั่งด้านในหรือด้านนอกคะ",
            "v": "best",
            "n": "Certainly, then a choice. The guest feels looked after, not processed.",
            "nTh": "พูด Certainly แล้วให้ทางเลือก ลูกค้ารู้สึกว่าได้รับการดูแล"
          }, {
            "t": "OK. Sit anywhere you like.",
            "th": "โอเค นั่งตรงไหนก็ได้",
            "v": "ok",
            "n": "Understandable, but we escort guests — we don't send them off alone.",
            "nTh": "เข้าใจได้ แต่เราต้องพาลูกค้าไปที่โต๊ะ ไม่ปล่อยให้เดินไปเอง"
          }, {
            "t": "No reservation? Wait there.",
            "th": "ไม่ได้จองเหรอ รอตรงนั้น",
            "v": "bad",
            "n": "Never make a guest stand and wait without a reason and a time.",
            "nTh": "ห้ามให้ลูกค้ายืนรอโดยไม่บอกเหตุผลและเวลา"
          }, {
            "t": "Inside or outside. Choose.",
            "th": "ข้างในหรือข้างนอก เลือกมา",
            "v": "bad",
            "n": "The words are right, the tone is an order.",
            "nTh": "คำถูก แต่น้ำเสียงเป็นการสั่ง"
          }]
        }, {
          "type": "guest",
          "scene": "The restaurant is full tonight.",
          "sceneTh": "คืนนี้ห้องอาหารเต็ม",
          "guest": {
            "en": "Do you have a table for two?",
            "th": "มีโต๊ะสำหรับสองท่านไหม"
          },
          "ask": "The next free table is at 8:00 p.m. What do you say?",
          "askTh": "โต๊ะว่างถัดไปคือ 20:00 น. คุณจะพูดอย่างไร",
          "options": [{
            "t": "I'm sorry, sir. We are fully booked until 8:00 p.m. Would you like me to reserve a table for you at that time?",
            "th": "ขอโทษค่ะ ห้องอาหารเต็มจนถึง 20:00 น. ให้ดิฉันจองโต๊ะให้คุณในเวลานั้นไหมคะ",
            "v": "best",
            "n": "Apology, the fact, and a solution. Never leave a 'no' without an offer.",
            "nTh": "ขอโทษ บอกข้อเท็จจริง แล้วเสนอทางออก อย่าปฏิเสธโดยไม่มีข้อเสนอ"
          }, {
            "t": "I'm sorry, we are fully booked tonight.",
            "th": "ขอโทษค่ะ คืนนี้เต็มแล้ว",
            "v": "ok",
            "n": "True, but you have just lost a cover. Always offer the next available time.",
            "nTh": "จริง แต่คุณเพิ่งเสียลูกค้าไป ต้องเสนอเวลาที่ว่างถัดไปเสมอ"
          }, {
            "t": "No table. Full.",
            "th": "ไม่มีโต๊ะ เต็ม",
            "v": "bad",
            "n": "Two words and the guest walks to another hotel.",
            "nTh": "สองคำ แล้วลูกค้าก็เดินไปโรงแรมอื่น"
          }, {
            "t": "You should have booked before.",
            "th": "คุณน่าจะจองมาก่อน",
            "v": "bad",
            "n": "Never tell a guest it is their fault.",
            "nTh": "ห้ามบอกลูกค้าว่าเป็นความผิดของเขา"
          }]
        }, {
          "type": "order",
          "scene": "You lead the guests to their table.",
          "sceneTh": "คุณพาลูกค้าไปที่โต๊ะ",
          "ask": "Put the words in order:",
          "askTh": "เรียงคำให้ถูกต้อง",
          "words": ["Here", "is", "your", "table", "for", "this", "evening"],
          "th": "นี่คือโต๊ะของคุณสำหรับคืนนี้ค่ะ"
        }, {
          "type": "guest",
          "scene": "You have seated the guest, but she is uncomfortable.",
          "sceneTh": "คุณพาลูกค้านั่งแล้ว แต่ลูกค้าไม่สบายใจ",
          "guest": {
            "en": "It's quite windy here. Can I take another seat?",
            "th": "ตรงนี้ลมค่อนข้างแรง ขอเปลี่ยนที่นั่งได้ไหม"
          },
          "ask": "How do you respond?",
          "askTh": "คุณจะตอบอย่างไร",
          "options": [{
            "t": "Certainly, madam. May I escort you to another table?",
            "th": "ได้ค่ะ ขออนุญาตพาคุณไปที่โต๊ะอื่นนะคะ",
            "v": "best",
            "n": "Certainly, and you take her there yourself. That is the K-HEART way.",
            "nTh": "ตอบรับ แล้วพาลูกค้าไปเอง นี่คือหัวใจของ K-HEART"
          }, {
            "t": "Yes, you can move to another table.",
            "th": "ได้ค่ะ ย้ายไปโต๊ะอื่นได้",
            "v": "ok",
            "n": "You agreed, but you left her to find it alone.",
            "nTh": "คุณตอบตกลง แต่ปล่อยให้ลูกค้าหาโต๊ะเอง"
          }, {
            "t": "Sorry, the tables are fixed.",
            "th": "ขอโทษค่ะ โต๊ะย้ายไม่ได้",
            "v": "bad",
            "n": "Never a flat no when we can move her.",
            "nTh": "อย่าปฏิเสธ ถ้าเราย้ายให้ได้"
          }, {
            "t": "The wind is not strong, madam.",
            "th": "ลมไม่แรงหรอกค่ะ",
            "v": "bad",
            "n": "Never argue with the guest's own feeling.",
            "nTh": "ห้ามเถียงกับความรู้สึกของลูกค้า"
          }]
        }, {
          "type": "gap",
          "scene": "The guest points to a table that is already booked.",
          "sceneTh": "ลูกค้าชี้ไปที่โต๊ะที่มีคนจองไว้แล้ว",
          "ask": "Complete the sentence:",
          "askTh": "เติมคำให้ถูกต้อง",
          "sentence": ["I'm sorry, sir. That table is already", "____", "."],
          "answer": "reserved",
          "pool": ["reserved", "closed", "finished", "cancelled"],
          "th": "ขอโทษค่ะ โต๊ะนั้นมีลูกค้าจองไว้แล้ว"
        }, {
          "type": "choice",
          "scene": "A family arrives with a small child.",
          "sceneTh": "ครอบครัวหนึ่งมาพร้อมเด็กเล็ก",
          "ask": "What do you offer?",
          "askTh": "คุณจะเสนออะไร",
          "options": [{
            "t": "Would you like a high chair for your child, sir?",
            "th": "ต้องการเก้าอี้เด็กสำหรับน้องไหมคะ",
            "v": "best",
            "n": "Offer it before they ask. Families notice this.",
            "nTh": "เสนอก่อนที่เขาจะขอ ครอบครัวจะสังเกตเห็นเสมอ"
          }, {
            "t": "Do you need a baby chair?",
            "th": "ต้องการเก้าอี้เด็กไหม",
            "v": "ok",
            "n": "Fine, but 'Would you like…' is warmer than 'Do you need…'.",
            "nTh": "ใช้ได้ แต่ Would you like… อบอุ่นกว่า Do you need…"
          }, {
            "t": "The child must sit on your lap.",
            "th": "ให้เด็กนั่งตักนะคะ",
            "v": "bad",
            "n": "We have high chairs. Bring one.",
            "nTh": "เรามีเก้าอี้เด็ก ไปเอามาให้"
          }, {
            "t": "Children are not allowed here.",
            "th": "ที่นี่ไม่อนุญาตให้เด็กเข้า",
            "v": "bad",
            "n": "Never.",
            "nTh": "ห้ามพูดเด็ดขาด"
          }]
        }]
      }, {
        "id": "order",
        "name": {
          "en": "Taking the Order",
          "th": "การรับออเดอร์และทวนคำสั่ง"
        },
        "questions": [{
          "type": "choice",
          "scene": "The guests have just sat down.",
          "sceneTh": "ลูกค้าเพิ่งนั่งลง",
          "ask": "You want to place the napkin on the guest's lap.",
          "askTh": "คุณต้องการวางผ้าเช็ดปากบนตักลูกค้า",
          "options": [{
            "t": "May I place your napkin, sir?",
            "th": "ขออนุญาตวางผ้าเช็ดปากค่ะ",
            "v": "best",
            "n": "Always ask before you touch anything near the guest.",
            "nTh": "ต้องขออนุญาตทุกครั้งก่อนเอื้อมเข้าใกล้ตัวลูกค้า"
          }, {
            "t": "I will put the napkin now.",
            "th": "ดิฉันจะวางผ้าเช็ดปากนะคะ",
            "v": "ok",
            "n": "You told her instead of asking her.",
            "nTh": "คุณบอก ไม่ได้ขออนุญาต"
          }, {
            "t": "Napkin.",
            "th": "ผ้าเช็ดปาก",
            "v": "bad",
            "n": "One word is not service.",
            "nTh": "คำเดียวไม่ใช่การบริการ"
          }, {
            "t": "Give me your napkin.",
            "th": "ส่งผ้าเช็ดปากมา",
            "v": "bad",
            "n": "This reverses who is serving whom.",
            "nTh": "กลายเป็นลูกค้าบริการเรา"
          }]
        }, {
          "type": "choice",
          "scene": "You have presented the menus. The manual is clear on the order of things.",
          "sceneTh": "คุณเสนอเมนูแล้ว คู่มือระบุลำดับไว้ชัดเจน",
          "ask": "What do you ask first?",
          "askTh": "คุณจะถามอะไรก่อน",
          "options": [{
            "t": "Would you like to order a drink first?",
            "th": "จะรับเครื่องดื่มก่อนไหมคะ",
            "v": "best",
            "n": "Drinks always come before food. It gives them time with the menu, and it sells.",
            "nTh": "ถามเครื่องดื่มก่อนอาหารเสมอ ลูกค้าได้เวลาดูเมนู และเราได้ยอดขาย"
          }, {
            "t": "Are you ready to order your food?",
            "th": "พร้อมสั่งอาหารหรือยังคะ",
            "v": "ok",
            "n": "Correct English, but too early. Ask for drinks first, every time.",
            "nTh": "ภาษาถูก แต่เร็วไป ต้องถามเครื่องดื่มก่อนทุกครั้ง"
          }, {
            "t": "What do you want?",
            "th": "ต้องการอะไร",
            "v": "bad",
            "n": "'What do you want' is never used with a guest.",
            "nTh": "ห้ามใช้ What do you want กับลูกค้า"
          }, {
            "t": "Hurry, please, we are busy tonight.",
            "th": "รีบหน่อยนะคะ คืนนี้ลูกค้าเยอะ",
            "v": "bad",
            "n": "The guest's evening is not our schedule.",
            "nTh": "ค่ำคืนของลูกค้าไม่ใช่ตารางงานของเรา"
          }]
        }, {
          "type": "guest",
          "scene": "You are taking the drinks order.",
          "sceneTh": "คุณกำลังรับออเดอร์เครื่องดื่ม",
          "guest": {
            "en": "A Diet Coke with no ice, please.",
            "th": "ไดเอ็ตโค้ก ไม่ใส่น้ำแข็งค่ะ"
          },
          "ask": "What do you say next?",
          "askTh": "คุณจะพูดอะไรต่อ",
          "options": [{
            "t": "Certainly. May I repeat your order — one Diet Coke with no ice?",
            "th": "ได้ค่ะ ขออนุญาตทวนคำสั่ง ไดเอ็ตโค้ก 1 แก้ว ไม่ใส่น้ำแข็ง ถูกต้องไหมคะ",
            "v": "best",
            "n": "Repeat every order back. This one habit prevents most F&B complaints.",
            "nTh": "ทวนออเดอร์ทุกครั้ง นิสัยนี้อย่างเดียวป้องกันคำร้องเรียนได้เกือบทั้งหมด"
          }, {
            "t": "Certainly, madam.",
            "th": "ได้ค่ะ",
            "v": "ok",
            "n": "Polite — but you did not repeat it. 'No ice' is exactly the detail that gets missed.",
            "nTh": "สุภาพ แต่ไม่ได้ทวน คำว่าไม่ใส่น้ำแข็งคือรายละเอียดที่มักตกหล่น"
          }, {
            "t": "Diet Coke. OK.",
            "th": "ไดเอ็ตโค้ก โอเค",
            "v": "bad",
            "n": "You dropped 'no ice'. That drink is coming back.",
            "nTh": "คุณลืมคำว่าไม่ใส่น้ำแข็ง เครื่องดื่มแก้วนี้จะถูกส่งคืน"
          }, {
            "t": "We only have normal Coke.",
            "th": "เรามีแต่โค้กธรรมดา",
            "v": "bad",
            "n": "Check first. Never guess what the outlet has.",
            "nTh": "ต้องเช็คก่อน อย่าเดาว่าร้านมีอะไร"
          }]
        }, {
          "type": "choice",
          "scene": "Before you take the food order.",
          "sceneTh": "ก่อนรับออเดอร์อาหาร",
          "ask": "You must ask about allergies. How?",
          "askTh": "คุณต้องถามเรื่องการแพ้อาหาร จะถามอย่างไร",
          "options": [{
            "t": "Excuse me, madam. May I ask if you have any food allergies?",
            "th": "ขออนุญาตสอบถามค่ะ ไม่ทราบว่าคุณแพ้อาหารอะไรไหมคะ",
            "v": "best",
            "n": "Ask every table, every time. This is a safety question, not a polite one.",
            "nTh": "ถามทุกโต๊ะ ทุกครั้ง นี่คือคำถามด้านความปลอดภัย ไม่ใช่แค่มารยาท"
          }, {
            "t": "Do you have allergy?",
            "th": "คุณมีอาการแพ้ไหม",
            "v": "ok",
            "n": "The guest will understand — but say 'any food allergies'.",
            "nTh": "ลูกค้าเข้าใจ แต่ให้พูดว่า any food allergies"
          }, {
            "t": "You are not allergic, right?",
            "th": "คุณไม่แพ้อะไรใช่ไหม",
            "v": "bad",
            "n": "Never ask it in a way that invites 'no'.",
            "nTh": "อย่าถามในลักษณะที่ชักจูงให้ตอบว่าไม่"
          }, {
            "t": "If you are allergic it is your responsibility.",
            "th": "ถ้าคุณแพ้ ถือเป็นความรับผิดชอบของคุณเอง",
            "v": "bad",
            "n": "We never say this. Ask, and tell the chef.",
            "nTh": "ห้ามพูดเด็ดขาด ให้ถาม แล้วแจ้งเชฟ"
          }]
        }, {
          "type": "guest",
          "scene": "The guest answers your allergy question.",
          "sceneTh": "ลูกค้าตอบคำถามเรื่องการแพ้อาหาร",
          "guest": {
            "en": "Yes, I am allergic to shellfish.",
            "th": "ใช่ค่ะ ฉันแพ้สัตว์ทะเลมีเปลือก"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "Certainly. I will inform the chef about your shellfish allergy.",
            "th": "รับทราบค่ะ ดิฉันจะแจ้งเชฟเรื่องการแพ้สัตว์ทะเลมีเปลือกของคุณ",
            "v": "best",
            "n": "Say the allergy back, and say who you will tell. Then actually tell them.",
            "nTh": "ทวนสิ่งที่ลูกค้าแพ้ บอกว่าจะแจ้งใคร แล้วไปแจ้งจริง ๆ"
          }, {
            "t": "OK, no shellfish for you.",
            "th": "โอเค ไม่มีสัตว์ทะเลมีเปลือกนะคะ",
            "v": "ok",
            "n": "Understood — but the guest needs to hear that the kitchen will know.",
            "nTh": "เข้าใจ แต่ลูกค้าต้องได้ยินว่าครัวจะรับทราบด้วย"
          }, {
            "t": "Then don't order the seafood.",
            "th": "งั้นก็อย่าสั่งซีฟู้ด",
            "v": "bad",
            "n": "It is our job to guide the order, not to hand the problem back.",
            "nTh": "หน้าที่เราคือช่วยแนะนำ ไม่ใช่โยนปัญหากลับให้ลูกค้า"
          }, {
            "t": "A little bit is OK, I think.",
            "th": "นิดหน่อยน่าจะไม่เป็นไร",
            "v": "bad",
            "n": "Never. An allergy is not a preference.",
            "nTh": "ห้ามเด็ดขาด การแพ้ไม่ใช่ความชอบ"
          }]
        }, {
          "type": "order",
          "scene": "The guest has ordered a steak.",
          "sceneTh": "ลูกค้าสั่งสเต็ก",
          "ask": "Put the words in order:",
          "askTh": "เรียงคำให้ถูกต้อง",
          "words": ["How", "would", "you", "like", "your", "steak", "cooked"],
          "th": "คุณต้องการสเต็กสุกระดับไหนคะ"
        }, {
          "type": "guest",
          "scene": "A guest is looking at the menu, unsure.",
          "sceneTh": "ลูกค้ากำลังดูเมนู แต่ยังตัดสินใจไม่ได้",
          "guest": {
            "en": "Can you recommend some dishes for me?",
            "th": "คุณช่วยแนะนำอาหารให้ฉันได้ไหม"
          },
          "ask": "Recommend something.",
          "askTh": "แนะนำอาหารให้ลูกค้า",
          "options": [{
            "t": "Certainly! May I recommend our grilled tiger prawns? It is our best-selling dish.",
            "th": "ได้ค่ะ ขอแนะนำกุ้งลายเสือย่างค่ะ เป็นเมนูขายดีที่สุดของเรา",
            "v": "best",
            "n": "Name one dish and give a reason. That is how you sell.",
            "nTh": "บอกชื่อเมนูหนึ่งอย่าง พร้อมเหตุผล นี่คือวิธีขาย"
          }, {
            "t": "Everything is good, madam.",
            "th": "อร่อยทุกอย่างเลยค่ะ",
            "v": "ok",
            "n": "This helps nobody. Choose a dish for her.",
            "nTh": "ไม่ช่วยอะไรเลย ต้องเลือกเมนูให้ลูกค้า"
          }, {
            "t": "I don't know. Please look at the menu.",
            "th": "ไม่ทราบค่ะ ลองดูในเมนูนะคะ",
            "v": "bad",
            "n": "Never say 'I don't know' about our own food.",
            "nTh": "ห้ามพูดว่าไม่รู้ เกี่ยวกับอาหารของเราเอง"
          }, {
            "t": "Whatever you like.",
            "th": "แล้วแต่คุณเลยค่ะ",
            "v": "bad",
            "n": "The guest asked precisely because she does not know.",
            "nTh": "ลูกค้าถามเพราะเขาไม่รู้นั่นแหละ"
          }]
        }, {
          "type": "gap",
          "scene": "You are closing the order.",
          "sceneTh": "คุณกำลังปิดการรับออเดอร์",
          "ask": "Complete the sentence:",
          "askTh": "เติมคำให้ถูกต้อง",
          "sentence": ["Certainly. Your food will be served", "____", "20 minutes."],
          "answer": "within",
          "pool": ["within", "after", "since", "until"],
          "th": "ได้ค่ะ อาหารของคุณจะเสิร์ฟภายใน 20 นาที"
        }, {
          "type": "choice",
          "scene": "The guest ordered a Thai curry.",
          "sceneTh": "ลูกค้าสั่งแกงไทย",
          "ask": "Check the spice level.",
          "askTh": "สอบถามระดับความเผ็ด",
          "options": [{
            "t": "May I ask how spicy you would like your dish?",
            "th": "ขออนุญาตสอบถามค่ะ ต้องการเผ็ดระดับไหนคะ",
            "v": "best",
            "n": "Ask before the kitchen cooks it, not after the guest cannot eat it.",
            "nTh": "ถามก่อนครัวทำ ไม่ใช่หลังจากลูกค้าทานไม่ได้"
          }, {
            "t": "Thai food is spicy, madam.",
            "th": "อาหารไทยเผ็ดนะคะ",
            "v": "ok",
            "n": "True, but it is a warning, not a question. Ask her the level.",
            "nTh": "จริง แต่นั่นคือคำเตือน ไม่ใช่คำถาม ต้องถามระดับ"
          }, {
            "t": "You cannot eat spicy food.",
            "th": "คุณทานเผ็ดไม่ได้หรอก",
            "v": "bad",
            "n": "Never decide for the guest.",
            "nTh": "ห้ามตัดสินใจแทนลูกค้า"
          }, {
            "t": "It is not spicy at all.",
            "th": "ไม่เผ็ดเลยค่ะ",
            "v": "bad",
            "n": "Do not promise what the kitchen has not agreed.",
            "nTh": "อย่าสัญญาในสิ่งที่ครัวยังไม่ได้ตกลง"
          }]
        }]
      }, {
        "id": "serve",
        "name": {
          "en": "Serving & Checking Back",
          "th": "การเสิร์ฟและสอบถามความพึงพอใจ"
        },
        "questions": [{
          "type": "choice",
          "scene": "You are carrying a sizzling hot plate to the table.",
          "sceneTh": "คุณกำลังยกจานร้อนไปที่โต๊ะ",
          "ask": "What must you say?",
          "askTh": "คุณต้องพูดอะไร",
          "options": [{
            "t": "Excuse me, here is your beef sirloin. Please be careful, the plate is hot. Enjoy your meal.",
            "th": "ขออนุญาตค่ะ นี่คือเนื้อสันนอกของคุณ กรุณาระวังจานร้อนนะคะ ขอให้อร่อยค่ะ",
            "v": "best",
            "n": "The warning is not optional. A burn is an incident report.",
            "nTh": "การเตือนไม่ใช่ทางเลือก ถ้าลูกค้าโดนลวกคือรายงานอุบัติเหตุ"
          }, {
            "t": "Here is your beef sirloin. Enjoy your meal.",
            "th": "นี่คือเนื้อสันนอกของคุณค่ะ ขอให้อร่อย",
            "v": "ok",
            "n": "Warm — but you left out the hot plate. Always warn.",
            "nTh": "อบอุ่นดี แต่ลืมเตือนเรื่องจานร้อน ต้องเตือนทุกครั้ง"
          }, {
            "t": "Careful! Hot!",
            "th": "ระวัง ร้อน",
            "v": "bad",
            "n": "You warned them, but you shouted at a guest.",
            "nTh": "เตือนก็จริง แต่เหมือนตะโกนใส่ลูกค้า"
          }, {
            "t": "Here. Don't touch the plate.",
            "th": "นี่ค่ะ อย่าจับจาน",
            "v": "bad",
            "n": "Never give a guest an instruction like this.",
            "nTh": "ห้ามสั่งลูกค้าแบบนี้"
          }]
        }, {
          "type": "choice",
          "scene": "The guests have taken two or three bites.",
          "sceneTh": "ลูกค้าทานไปได้ 2-3 คำ",
          "ask": "You check back on the table.",
          "askTh": "คุณเข้าไปสอบถามความพึงพอใจ",
          "options": [{
            "t": "How is everything? May I get anything else for you?",
            "th": "ทุกอย่างเป็นอย่างไรบ้างคะ ต้องการอะไรเพิ่มเติมไหมคะ",
            "v": "best",
            "n": "Check back early — while there is still time to fix a dish.",
            "nTh": "เข้าไปถามแต่เนิ่น ๆ ตอนที่ยังแก้ไขจานนั้นได้ทัน"
          }, {
            "t": "Is the food OK?",
            "th": "อาหารโอเคไหมคะ",
            "v": "ok",
            "n": "It works, but 'How is everything?' opens the door wider.",
            "nTh": "ใช้ได้ แต่ How is everything? เปิดโอกาสให้ลูกค้าพูดมากกว่า"
          }, {
            "t": "Finished?",
            "th": "ทานเสร็จหรือยัง",
            "v": "bad",
            "n": "They have barely started.",
            "nTh": "ลูกค้าเพิ่งเริ่มทานเอง"
          }, {
            "t": "You like it, yes?",
            "th": "อร่อยใช่ไหมคะ",
            "v": "bad",
            "n": "Never ask a question that pushes the guest to say yes.",
            "nTh": "อย่าถามคำถามที่บังคับให้ลูกค้าตอบว่าใช่"
          }]
        }, {
          "type": "guest",
          "scene": "You checked back on the table.",
          "sceneTh": "คุณเข้าไปสอบถามความพึงพอใจ",
          "guest": {
            "en": "Yes, it's very delicious. Thank you.",
            "th": "อร่อยมากค่ะ ขอบคุณ"
          },
          "ask": "How do you answer?",
          "askTh": "คุณจะตอบอย่างไร",
          "options": [{
            "t": "I am glad you enjoy it. Please let me know if you need anything else.",
            "th": "ดีใจที่คุณชอบค่ะ หากต้องการอะไรเพิ่มเติมแจ้งได้เลยนะคะ",
            "v": "best",
            "n": "Take the compliment, then leave the door open.",
            "nTh": "รับคำชม แล้วเปิดโอกาสให้ลูกค้าเรียกใช้ต่อ"
          }, {
            "t": "Thank you, madam.",
            "th": "ขอบคุณค่ะ",
            "v": "ok",
            "n": "Polite, but you thanked her for her own compliment. Be glad, not grateful.",
            "nTh": "สุภาพ แต่คุณขอบคุณคำชมของเขา ให้บอกว่าดีใจ ไม่ใช่ขอบคุณ"
          }, {
            "t": "OK.",
            "th": "โอเคค่ะ",
            "v": "bad",
            "n": "The guest gave you something. Give something back.",
            "nTh": "ลูกค้าให้อะไรกับคุณ ต้องตอบกลับ"
          }, {
            "t": "Yes, our chef is very good.",
            "th": "ค่ะ เชฟเราเก่งมาก",
            "v": "bad",
            "n": "It is about her meal, not our pride.",
            "nTh": "เรื่องนี้เกี่ยวกับมื้ออาหารของลูกค้า ไม่ใช่ความภูมิใจของเรา"
          }]
        }, {
          "type": "guest",
          "scene": "It is 8 p.m., the restaurant is full, and the guest's main course is 25 minutes late.",
          "sceneTh": "สองทุ่ม ห้องอาหารเต็ม อาหารจานหลักของลูกค้าช้าไป 25 นาที",
          "guest": {
            "en": "We have been waiting a very long time.",
            "th": "เรารออาหารนานมากแล้ว"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "I'm extremely sorry. The restaurant is very busy tonight and your food is taking longer. Could you wait a few more minutes? I will go and take care of it for you myself.",
            "th": "ต้องขออภัยเป็นอย่างยิ่งค่ะ คืนนี้ลูกค้าเยอะเป็นพิเศษ อาหารจึงใช้เวลานานขึ้น รบกวนรออีกสักครู่นะคะ ดิฉันจะไปตามอาหารให้เองค่ะ",
            "v": "best",
            "n": "Apologise, explain, and say what YOU will do next. Then go and do it.",
            "nTh": "ขอโทษ อธิบาย แล้วบอกว่าคุณจะทำอะไรต่อ แล้วไปทำจริง ๆ"
          }, {
            "t": "I'm sorry, the kitchen is very busy tonight.",
            "th": "ขอโทษค่ะ คืนนี้ครัวยุ่งมาก",
            "v": "ok",
            "n": "You apologised but you gave the guest nothing to hold on to. Give a time and an action.",
            "nTh": "ขอโทษแล้ว แต่ลูกค้าไม่ได้อะไรเลย ต้องให้เวลาและการกระทำ"
          }, {
            "t": "It is not my fault, madam. It is the kitchen.",
            "th": "ไม่ใช่ความผิดดิฉันค่ะ เป็นที่ครัว",
            "v": "bad",
            "n": "Never blame another department in front of a guest. To the guest, you ARE the hotel.",
            "nTh": "ห้ามโทษแผนกอื่นต่อหน้าลูกค้า สำหรับลูกค้า คุณคือโรงแรม"
          }, {
            "t": "Everybody is waiting tonight.",
            "th": "คืนนี้ทุกคนก็รอเหมือนกัน",
            "v": "bad",
            "n": "Their wait is not made better by other people's waits.",
            "nTh": "การที่คนอื่นรอด้วย ไม่ได้ทำให้ลูกค้ารู้สึกดีขึ้น"
          }]
        }, {
          "type": "order",
          "scene": "The starters are cleared and the main course is coming.",
          "sceneTh": "เก็บจานอาหารเรียกน้ำย่อยแล้ว อาหารจานหลักกำลังมา",
          "ask": "Put the words in order:",
          "askTh": "เรียงคำให้ถูกต้อง",
          "words": ["May", "I", "change", "your", "cutlery", "sir"],
          "th": "ขออนุญาตเปลี่ยนเครื่องมือค่ะ/ครับ"
        }, {
          "type": "choice",
          "scene": "The main course plates are cleared. This is your chance to sell.",
          "sceneTh": "เก็บจานอาหารจานหลักแล้ว นี่คือโอกาสในการขาย",
          "ask": "Offer dessert.",
          "askTh": "เสนอของหวาน",
          "options": [{
            "t": "How was your meal? May I recommend a dessert? Our mango sticky rice is very delicious.",
            "th": "อาหารเป็นอย่างไรบ้างคะ ขอแนะนำของหวานไหมคะ ข้าวเหนียวมะม่วงของเราอร่อยมากค่ะ",
            "v": "best",
            "n": "Ask, then recommend one dish by name. A general offer sells nothing.",
            "nTh": "ถามก่อน แล้วแนะนำเมนูหนึ่งอย่างโดยระบุชื่อ การถามลอย ๆ ขายไม่ได้"
          }, {
            "t": "Would you like to see the dessert menu?",
            "th": "ต้องการดูเมนูของหวานไหมคะ",
            "v": "ok",
            "n": "Fine — but naming the mango sticky rice sells it.",
            "nTh": "ใช้ได้ แต่การเอ่ยชื่อข้าวเหนียวมะม่วงจะขายได้จริง"
          }, {
            "t": "Dessert?",
            "th": "ของหวานไหม",
            "v": "bad",
            "n": "One word. Half of them will say no out of habit.",
            "nTh": "คำเดียว ลูกค้าครึ่งหนึ่งจะปฏิเสธโดยอัตโนมัติ"
          }, {
            "t": "You are finished, so I bring the bill.",
            "th": "ทานเสร็จแล้วนะคะ ดิฉันเก็บบิลเลย",
            "v": "bad",
            "n": "You just skipped the whole dessert and coffee course.",
            "nTh": "คุณเพิ่งข้ามของหวานและกาแฟไปทั้งคอร์ส"
          }]
        }]
      }, {
        "id": "bill",
        "name": {
          "en": "The Bill",
          "th": "การชำระเงิน"
        },
        "questions": [{
          "type": "guest",
          "scene": "The guests are ready to leave.",
          "sceneTh": "ลูกค้าพร้อมจะกลับ",
          "guest": {
            "en": "No, thank you, we've had enough. Can I have my bill?",
            "th": "ไม่แล้วค่ะ อิ่มแล้ว ขอบิลด้วยค่ะ"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "Certainly, sir. How would you like to settle your bill?",
            "th": "ได้ค่ะ ไม่ทราบว่าคุณต้องการชำระเงินด้วยวิธีใดคะ",
            "v": "best",
            "n": "Certainly, and the payment question in one breath. Nothing is delayed.",
            "nTh": "ตอบรับพร้อมถามวิธีชำระในประโยคเดียว ไม่เสียเวลา"
          }, {
            "t": "Certainly, sir. One moment.",
            "th": "ได้ค่ะ รอสักครู่นะคะ",
            "v": "ok",
            "n": "Fine, but you will have to come back and ask how they are paying anyway.",
            "nTh": "ใช้ได้ แต่คุณต้องกลับมาถามวิธีชำระอยู่ดี"
          }, {
            "t": "Cash or card?",
            "th": "เงินสดหรือบัตร",
            "v": "bad",
            "n": "Correct information, but it sounds like a market stall.",
            "nTh": "ข้อมูลถูก แต่ฟังดูเหมือนแผงลอย"
          }, {
            "t": "You pay now.",
            "th": "จ่ายเลยนะ",
            "v": "bad",
            "n": "Never.",
            "nTh": "ห้ามเด็ดขาด"
          }]
        }, {
          "type": "choice",
          "scene": "Two couples from different rooms are dining together.",
          "sceneTh": "ลูกค้าสองคู่จากคนละห้องมาทานด้วยกัน",
          "ask": "Ask about the bill.",
          "askTh": "สอบถามเรื่องบิล",
          "options": [{
            "t": "Would you like to pay all together, or separate the bills?",
            "th": "คุณต้องการจ่ายรวมกันหรือแยกบิลคะ",
            "v": "best",
            "n": "Ask before you print. Splitting a printed bill at the table is awkward for everyone.",
            "nTh": "ถามก่อนพิมพ์บิล การมาแยกบิลที่โต๊ะทำให้ทุกคนอึดอัด"
          }, {
            "t": "One bill or many bills?",
            "th": "บิลเดียวหรือหลายบิล",
            "v": "ok",
            "n": "The guest will understand, but 'separate the bills' is the phrase.",
            "nTh": "ลูกค้าเข้าใจ แต่คำที่ถูกคือ separate the bills"
          }, {
            "t": "Who is paying?",
            "th": "ใครเป็นคนจ่าย",
            "v": "bad",
            "n": "Never put the table in that position.",
            "nTh": "อย่าทำให้โต๊ะนั้นอึดอัด"
          }, {
            "t": "We cannot split bills.",
            "th": "เราแยกบิลไม่ได้",
            "v": "bad",
            "n": "We can. Ask your supervisor before you refuse anything.",
            "nTh": "เราแยกได้ ถามหัวหน้าก่อนปฏิเสธอะไรก็ตาม"
          }]
        }, {
          "type": "guest",
          "scene": "The guest wants to sign for the meal.",
          "sceneTh": "ลูกค้าต้องการเซ็นเข้าห้องพัก",
          "guest": {
            "en": "Just charge it to my room.",
            "th": "โพสต์เข้าห้องได้เลย"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "Certainly, one moment, please. Could you kindly write your room number, your full name, and your signature here?",
            "th": "ได้ค่ะ รอสักครู่นะคะ รบกวนเขียนหมายเลขห้อง ชื่อ-นามสกุล และลายเซ็นตรงนี้ค่ะ",
            "v": "best",
            "n": "All three: room number, full name, signature. A missing signature is a lost charge.",
            "nTh": "ต้องครบสามอย่าง เลขห้อง ชื่อเต็ม ลายเซ็น ขาดลายเซ็นคือเก็บเงินไม่ได้"
          }, {
            "t": "Certainly. Please sign here.",
            "th": "ได้ค่ะ เซ็นตรงนี้นะคะ",
            "v": "ok",
            "n": "You will be chasing that room number later.",
            "nTh": "เดี๋ยวคุณต้องมาตามหาเลขห้องทีหลัง"
          }, {
            "t": "Room number?",
            "th": "ห้องอะไร",
            "v": "bad",
            "n": "Too abrupt, and you did not confirm you can do it.",
            "nTh": "ห้วนเกินไป และยังไม่ได้ตอบรับว่าทำให้ได้"
          }, {
            "t": "Are you sure you are staying here?",
            "th": "แน่ใจนะคะว่าพักที่นี่",
            "v": "bad",
            "n": "Never question a guest's honesty.",
            "nTh": "ห้ามสงสัยความซื่อสัตย์ของลูกค้า"
          }]
        }, {
          "type": "order",
          "scene": "You present the bill folder.",
          "sceneTh": "คุณยื่นสมุดบิลให้ลูกค้า",
          "ask": "Put the words in order:",
          "askTh": "เรียงคำให้ถูกต้อง",
          "words": ["The", "total", "amount", "is", "one", "thousand", "eight", "hundred", "baht"],
          "th": "ยอดรวมทั้งหมด หนึ่งพันแปดร้อยบาทค่ะ"
        }, {
          "type": "guest",
          "scene": "You return to the table with the change.",
          "sceneTh": "คุณกลับมาที่โต๊ะพร้อมเงินทอน",
          "guest": {
            "en": "Keep the change.",
            "th": "ไม่ต้องทอนนะ"
          },
          "ask": "How do you answer?",
          "askTh": "คุณจะตอบอย่างไร",
          "options": [{
            "t": "Thank you very much, sir. That is very kind of you.",
            "th": "ขอบพระคุณมากค่ะ คุณใจดีมากเลยค่ะ",
            "v": "best",
            "n": "Receive it graciously. Look at the guest and say it.",
            "nTh": "รับด้วยความนอบน้อม สบตาลูกค้าแล้วพูด"
          }, {
            "t": "Thank you, sir.",
            "th": "ขอบคุณค่ะ",
            "v": "ok",
            "n": "Correct, but a tip deserves a real thank you.",
            "nTh": "ถูกต้อง แต่ทิปสมควรได้รับคำขอบคุณที่จริงใจกว่านี้"
          }, {
            "t": "Are you sure?",
            "th": "แน่ใจนะคะ",
            "v": "bad",
            "n": "Never make the guest repeat a gift.",
            "nTh": "อย่าให้ลูกค้าต้องพูดซ้ำเรื่องที่เขาให้"
          }, {
            "t": "It is too small.",
            "th": "น้อยไปนะคะ",
            "v": "bad",
            "n": "Never comment on the amount. Ever.",
            "nTh": "ห้ามวิจารณ์จำนวนเงินเด็ดขาด"
          }]
        }, {
          "type": "choice",
          "scene": "You place the receipt with the questionnaire card.",
          "sceneTh": "คุณวางใบเสร็จพร้อมแบบสอบถามความพึงพอใจ",
          "ask": "Ask for their feedback.",
          "askTh": "ขอความคิดเห็นจากลูกค้า",
          "options": [{
            "t": "Here is your receipt, madam. If you have a moment, could you kindly fill out our questionnaire? Your feedback helps us serve you better next time.",
            "th": "นี่คือใบเสร็จค่ะ หากคุณพอมีเวลา รบกวนกรอกแบบสอบถามให้เราด้วยนะคะ ความคิดเห็นของคุณจะช่วยให้เราบริการคุณได้ดีขึ้นในครั้งหน้าค่ะ",
            "v": "best",
            "n": "Give the reason. Guests fill in the card when they know why it matters.",
            "nTh": "บอกเหตุผลด้วย ลูกค้าจะกรอกเมื่อรู้ว่ามันสำคัญอย่างไร"
          }, {
            "t": "Please fill in this questionnaire.",
            "th": "กรุณากรอกแบบสอบถามนี้ค่ะ",
            "v": "ok",
            "n": "An instruction, not an invitation. And no reason given.",
            "nTh": "เป็นคำสั่ง ไม่ใช่คำเชิญ และไม่ได้ให้เหตุผล"
          }, {
            "t": "Please give us a good score.",
            "th": "ช่วยให้คะแนนดี ๆ นะคะ",
            "v": "bad",
            "n": "Never ask a guest for a score. It is in the manual and in every audit.",
            "nTh": "ห้ามขอคะแนนจากลูกค้าเด็ดขาด ผิดทั้งคู่มือและการตรวจสอบ"
          }, {
            "t": "If you have a problem, write it here.",
            "th": "ถ้ามีปัญหาอะไร เขียนตรงนี้นะคะ",
            "v": "bad",
            "n": "You just invited a complaint.",
            "nTh": "คุณเพิ่งเชิญชวนให้ลูกค้าร้องเรียน"
          }]
        }, {
          "type": "choice",
          "scene": "The guests stand to leave. You give a wai.",
          "sceneTh": "ลูกค้าลุกขึ้นจะกลับ คุณยกมือไหว้",
          "ask": "The last thing they hear from you:",
          "askTh": "ประโยคสุดท้ายที่ลูกค้าได้ยินจากคุณ",
          "options": [{
            "t": "Korb khun kha. Thank you for dining with us. Have a wonderful evening.",
            "th": "ขอบคุณค่ะ ขอบคุณที่มาใช้บริการห้องอาหารของเรา ขอให้มีค่ำคืนที่ดีนะคะ",
            "v": "best",
            "n": "The last ten seconds and the first ten seconds are what the review is written about.",
            "nTh": "สิบวินาทีแรกและสิบวินาทีสุดท้าย คือสิ่งที่ลูกค้าเอาไปเขียนรีวิว"
          }, {
            "t": "Thank you. Goodbye.",
            "th": "ขอบคุณค่ะ ลาก่อน",
            "v": "ok",
            "n": "Correct, but flat. This is the moment to be warm.",
            "nTh": "ถูกต้อง แต่เรียบเกินไป นี่คือจังหวะที่ต้องอบอุ่น"
          }, {
            "t": "Bye bye.",
            "th": "บ๊ายบาย",
            "v": "bad",
            "n": "Too casual for a guest.",
            "nTh": "กันเองเกินไปสำหรับลูกค้า"
          }, {
            "t": "Come again.",
            "th": "มาอีกนะ",
            "v": "bad",
            "n": "'Please come and visit us again' — the short form sounds like a shop.",
            "nTh": "ให้พูดเต็มประโยค แบบสั้นฟังดูเหมือนร้านค้า"
          }]
        }]
      }, {
        "id": "problems",
        "name": {
          "en": "When Things Go Wrong",
          "th": "เมื่อเกิดปัญหา"
        },
        "questions": [{
          "type": "choice",
          "scene": "You are pouring red wine and you spill it on the guest's shirt.",
          "sceneTh": "คุณรินไวน์แดงแล้วหกใส่เสื้อลูกค้า",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "I am terribly sorry. We will take care of your laundry. Would you like to give me the shirt tonight, or put it in the laundry bag for housekeeping tomorrow?",
            "th": "ดิฉันขอโทษจริง ๆ ค่ะ เราจะดูแลเรื่องการซักให้คุณ คุณต้องการให้เสื้อกับดิฉันคืนนี้ หรือจะใส่ถุงซักผ้าให้แม่บ้านมารับพรุ่งนี้คะ",
            "v": "best",
            "n": "Apologise, take responsibility, and give a choice. Then tell your supervisor immediately.",
            "nTh": "ขอโทษ รับผิดชอบ ให้ทางเลือก แล้วแจ้งหัวหน้าทันที"
          }, {
            "t": "I am terribly sorry, sir.",
            "th": "ดิฉันขอโทษจริง ๆ ค่ะ",
            "v": "ok",
            "n": "The apology is right, but the guest's shirt is still ruined. Offer the laundry.",
            "nTh": "ขอโทษถูกแล้ว แต่เสื้อลูกค้ายังเปื้อนอยู่ ต้องเสนอซักให้"
          }, {
            "t": "I am sorry. It will wash out.",
            "th": "ขอโทษค่ะ เดี๋ยวซักก็ออก",
            "v": "bad",
            "n": "Never promise that. And never make the guest fix it themselves.",
            "nTh": "ห้ามสัญญาแบบนั้น และห้ามให้ลูกค้าจัดการเอง"
          }, {
            "t": "Sorry, you moved your arm.",
            "th": "ขอโทษค่ะ คุณขยับแขนเอง",
            "v": "bad",
            "n": "Never blame the guest. Not even when it is true.",
            "nTh": "ห้ามโทษลูกค้า แม้ว่าจะเป็นเรื่องจริงก็ตาม"
          }]
        }, {
          "type": "guest",
          "scene": "The guest has taken two spoonfuls of the curry.",
          "sceneTh": "ลูกค้าทานแกงไปสองคำ",
          "guest": {
            "en": "This curry is very spicy. I can't eat it.",
            "th": "แกงเผ็ดมาก ฉันทานไม่ได้"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "I am so sorry, madam. Let me change it for you right away.",
            "th": "ต้องขอโทษจริง ๆ ค่ะ ขออนุญาตเปลี่ยนให้คุณทันทีนะคะ",
            "v": "best",
            "n": "Change it immediately. Do not ask her to try again, do not explain Thai food.",
            "nTh": "เปลี่ยนให้ทันที อย่าให้ลูกค้าลองใหม่ อย่าอธิบายเรื่องอาหารไทย"
          }, {
            "t": "I am sorry. Would you like some rice with it?",
            "th": "ขอโทษค่ะ รับข้าวเพิ่มไหมคะ",
            "v": "ok",
            "n": "A small help — but she said she cannot eat it. Change the dish.",
            "nTh": "ช่วยได้นิดหน่อย แต่ลูกค้าบอกว่าทานไม่ได้ ต้องเปลี่ยนจาน"
          }, {
            "t": "Thai curry is always spicy, madam.",
            "th": "แกงไทยเผ็ดเป็นปกติค่ะ",
            "v": "bad",
            "n": "You are correct and you have lost the guest.",
            "nTh": "คุณพูดถูก และคุณเสียลูกค้าไปแล้ว"
          }, {
            "t": "You ordered it, madam.",
            "th": "คุณสั่งเองนะคะ",
            "v": "bad",
            "n": "Never.",
            "nTh": "ห้ามเด็ดขาด"
          }]
        }, {
          "type": "guest",
          "scene": "The guest has already finished the dish and mentions it as she leaves.",
          "sceneTh": "ลูกค้าทานหมดแล้ว และเพิ่งมาบอกตอนจะกลับ",
          "guest": {
            "en": "That curry was really too spicy for me.",
            "th": "แกงนั้นเผ็ดเกินไปสำหรับฉัน"
          },
          "ask": "It is too late to change it. What do you say?",
          "askTh": "สายเกินกว่าจะเปลี่ยนแล้ว คุณจะพูดอย่างไร",
          "options": [{
            "t": "I am sorry to hear that. If we had known, we would have changed it for you. When you come back, I will ask the chef to cook it less spicy for you.",
            "th": "ดิฉันเสียใจที่ได้ยินอย่างนั้นค่ะ ถ้าเรารู้ก่อน เราจะเปลี่ยนให้คุณทันที ครั้งหน้าที่คุณมา ดิฉันจะแจ้งเชฟให้ทำเผ็ดน้อยลงสำหรับคุณค่ะ",
            "v": "best",
            "n": "Sorry, then a promise for next time. Then remember her face — and keep it.",
            "nTh": "ขอโทษ แล้วให้สัญญาสำหรับครั้งหน้า จากนั้นจำหน้าลูกค้าให้ได้ และทำตามที่สัญญา"
          }, {
            "t": "I am sorry to hear that, madam.",
            "th": "เสียใจที่ได้ยินอย่างนั้นค่ะ",
            "v": "ok",
            "n": "Correct — but you gave her no reason to come back tomorrow.",
            "nTh": "ถูกต้อง แต่คุณไม่ได้ให้เหตุผลที่ลูกค้าจะกลับมาอีก"
          }, {
            "t": "Why didn't you tell me before?",
            "th": "ทำไมไม่บอกตั้งแต่แรกล่ะคะ",
            "v": "bad",
            "n": "Never turn it into her mistake.",
            "nTh": "ห้ามทำให้กลายเป็นความผิดของลูกค้า"
          }, {
            "t": "Next time order something else.",
            "th": "ครั้งหน้าสั่งอย่างอื่นนะคะ",
            "v": "bad",
            "n": "You just told her the problem is her ordering.",
            "nTh": "คุณเพิ่งบอกว่าปัญหาคือลูกค้าสั่งผิด"
          }]
        }, {
          "type": "choice",
          "scene": "A guest arrives at the restaurant carrying their own bottle of wine.",
          "sceneTh": "ลูกค้าถือไวน์ของตัวเองเข้ามาในห้องอาหาร",
          "ask": "Corkage is {{charge.corkage}}. What do you say — before the bottle is opened?",
          "askTh": "ค่าเปิดขวด {{charge.corkage}} คุณจะพูดอย่างไร ก่อนเปิดขวด",
          "options": [{
            "t": "Excuse me, sir. I would like to inform you that we have a corkage charge of {{charge.corkage}} per bottle.",
            "th": "ขออนุญาตแจ้งค่ะ เรามีค่าบริการเปิดขวด {{charge.corkage}}ต่อขวดค่ะ",
            "v": "best",
            "n": "Always tell the guest BEFORE you charge them. A surprise on the bill is a complaint.",
            "nTh": "ต้องแจ้งลูกค้าก่อนคิดเงินเสมอ ค่าใช้จ่ายที่โผล่มาในบิลคือคำร้องเรียน"
          }, {
            "t": "Sir, you cannot bring your own wine here.",
            "th": "คุณคะ นำไวน์เข้ามาเองไม่ได้นะคะ",
            "v": "bad",
            "n": "They can. There is a charge. Say the charge.",
            "nTh": "นำเข้ามาได้ แต่มีค่าบริการ ให้บอกค่าบริการ"
          }, {
            "t": "I will open it for you.",
            "th": "เดี๋ยวดิฉันเปิดให้ค่ะ",
            "v": "bad",
            "n": "You just gave away {{charge.corkage}} and you will have to explain it at the bill.",
            "nTh": "คุณเพิ่งทำโรงแรมเสีย {{charge.corkage}} และต้องไปอธิบายตอนเก็บเงิน"
          }, {
            "t": "There is a small charge, I think.",
            "th": "น่าจะมีค่าบริการนิดหน่อยนะคะ",
            "v": "ok",
            "n": "Never say 'I think' about a price. Know the number: {{charge.corkage}} per bottle.",
            "nTh": "ห้ามพูดว่าน่าจะ เกี่ยวกับราคา ต้องรู้ตัวเลข {{charge.corkage}}ต่อขวด"
          }]
        }, {
          "type": "guest",
          "scene": "You have told the guest about the corkage charge.",
          "sceneTh": "คุณแจ้งค่าเปิดขวดให้ลูกค้าทราบแล้ว",
          "guest": {
            "en": "Why do you have to charge? Can you take it off?",
            "th": "ทำไมต้องคิดเงิน ยกเว้นให้ได้ไหม"
          },
          "ask": "You are not allowed to waive it. What do you say?",
          "askTh": "คุณไม่มีอำนาจยกเว้นให้ คุณจะพูดอย่างไร",
          "options": [{
            "t": "I am sorry, sir, I am afraid I cannot do that myself. May I ask my supervisor if we can arrange something for you?",
            "th": "ขอโทษค่ะ ดิฉันเกรงว่าจะทำเองไม่ได้ ขออนุญาตไปสอบถามหัวหน้าให้คุณนะคะ",
            "v": "best",
            "n": "Never a bare no. Take it to your supervisor — the guest sees someone fighting for them.",
            "nTh": "อย่าปฏิเสธเปล่า ๆ ให้ไปถามหัวหน้า ลูกค้าจะเห็นว่ามีคนพยายามช่วยเขา"
          }, {
            "t": "I am sorry, sir. It is our hotel policy.",
            "th": "ขอโทษค่ะ เป็นนโยบายของโรงแรม",
            "v": "ok",
            "n": "True and correct — but 'policy' is a wall. Offer to ask your supervisor.",
            "nTh": "จริงและถูกต้อง แต่คำว่านโยบายคือกำแพง ให้เสนอไปถามหัวหน้า"
          }, {
            "t": "No. It is the rule.",
            "th": "ไม่ได้ค่ะ เป็นกฎ",
            "v": "bad",
            "n": "'It is the rule' ends the conversation and starts a review.",
            "nTh": "คำว่ามันเป็นกฎ จบบทสนทนา และเริ่มต้นรีวิวแย่ ๆ"
          }, {
            "t": "Everybody pays it. You must pay too.",
            "th": "ทุกคนก็จ่าย คุณก็ต้องจ่าย",
            "v": "bad",
            "n": "'You must' is never said to a guest.",
            "nTh": "ห้ามพูดคำว่า คุณต้อง กับลูกค้า"
          }]
        }, {
          "type": "guest",
          "scene": "The guest orders a dessert that has run out.",
          "sceneTh": "ลูกค้าสั่งของหวานที่หมดแล้ว",
          "guest": {
            "en": "I'll have the caramel custard, please.",
            "th": "ขอคาราเมลคัสตาร์ดค่ะ"
          },
          "ask": "There is none left. What do you say?",
          "askTh": "ของหมดแล้ว คุณจะพูดอย่างไร",
          "options": [{
            "t": "I am sorry, we don't have caramel custard tonight. Would you like to try our mango crème brûlée instead? It is one of our most popular desserts.",
            "th": "ขอโทษค่ะ คืนนี้คาราเมลคัสตาร์ดหมดแล้ว จะลองแมงโก้ครีมบรูเล่แทนไหมคะ เป็นของหวานยอดนิยมของเราค่ะ",
            "v": "best",
            "n": "Never a no without an alternative — and choose something close to what they wanted.",
            "nTh": "อย่าปฏิเสธโดยไม่มีตัวเลือกอื่น และเลือกสิ่งที่ใกล้เคียงกับที่ลูกค้าต้องการ"
          }, {
            "t": "I am sorry, the caramel custard is finished.",
            "th": "ขอโทษค่ะ คาราเมลคัสตาร์ดหมดแล้ว",
            "v": "ok",
            "n": "The guest now has no dessert and you have no sale. Always offer a substitute.",
            "nTh": "ลูกค้าไม่ได้ของหวาน เราไม่ได้ยอดขาย ต้องเสนอตัวเลือกทดแทนเสมอ"
          }, {
            "t": "It is finished. Choose another one.",
            "th": "หมดแล้ว เลือกอย่างอื่นนะคะ",
            "v": "bad",
            "n": "You handed the problem back to the guest.",
            "nTh": "คุณโยนปัญหากลับให้ลูกค้า"
          }, {
            "t": "We never have that.",
            "th": "เราไม่เคยมีเมนูนั้น",
            "v": "bad",
            "n": "It is on our menu. Do not say this.",
            "nTh": "มันอยู่ในเมนูของเรา ห้ามพูดแบบนี้"
          }]
        }, {
          "type": "guest",
          "scene": "A guest asks about a sauce and you honestly do not know what is in it.",
          "sceneTh": "ลูกค้าถามเรื่องซอส และคุณไม่รู้จริง ๆ ว่ามีอะไรบ้าง",
          "guest": {
            "en": "What exactly is in this sauce? I need to know.",
            "th": "ในซอสนี้มีอะไรบ้าง ฉันจำเป็นต้องรู้"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "That is a good question, madam. May I check with the chef and come straight back to you?",
            "th": "เป็นคำถามที่ดีค่ะ ขออนุญาตไปสอบถามเชฟแล้วรีบกลับมาแจ้งคุณนะคะ",
            "v": "best",
            "n": "You may not know. You must always know who does — and go and ask.",
            "nTh": "คุณไม่รู้ได้ แต่ต้องรู้เสมอว่าใครรู้ แล้วไปถาม"
          }, {
            "t": "I think it has fish sauce and chilli.",
            "th": "น่าจะมีน้ำปลากับพริกค่ะ",
            "v": "bad",
            "n": "Never guess about ingredients. This is how an allergy incident happens.",
            "nTh": "ห้ามเดาเรื่องส่วนผสม นี่คือต้นเหตุของอุบัติเหตุจากการแพ้อาหาร"
          }, {
            "t": "I don't know.",
            "th": "ไม่ทราบค่ะ",
            "v": "bad",
            "n": "Never end on 'I don't know'. Always end on 'I will find out'.",
            "nTh": "ห้ามจบด้วยคำว่าไม่ทราบ ให้จบด้วยคำว่าจะไปหาคำตอบให้"
          }, {
            "t": "It is our secret recipe.",
            "th": "เป็นสูตรลับของเราค่ะ",
            "v": "bad",
            "n": "Cute, but she may be asking because of an allergy.",
            "nTh": "ฟังดูน่ารัก แต่ลูกค้าอาจถามเพราะเขาแพ้อาหาร"
          }]
        }, {
          "type": "guest",
          "scene": "A guest wants som tam, which is not on tonight's menu.",
          "sceneTh": "ลูกค้าอยากทานส้มตำ ซึ่งไม่มีในเมนูคืนนี้",
          "guest": {
            "en": "Could I have som tam?",
            "th": "ขอส้มตำได้ไหม"
          },
          "ask": "What is the first thing you say?",
          "askTh": "สิ่งแรกที่คุณจะพูดคืออะไร",
          "options": [{
            "t": "I'm sorry, sir, it is not on our menu — but please allow me to check with the chef for you.",
            "th": "ขอโทษค่ะ ไม่มีในเมนูของเรา แต่ขออนุญาตไปสอบถามเชฟให้คุณก่อนนะคะ",
            "v": "best",
            "n": "Never refuse before you have asked the kitchen. Very often the answer is yes.",
            "nTh": "อย่าปฏิเสธก่อนถามครัว บ่อยครั้งครัวทำให้ได้"
          }, {
            "t": "I'm sorry, it is not on our menu.",
            "th": "ขอโทษค่ะ ไม่มีในเมนู",
            "v": "ok",
            "n": "You closed the door without knocking on the kitchen's.",
            "nTh": "คุณปิดประตูโดยไม่ได้ไปเคาะประตูครัวก่อน"
          }, {
            "t": "No, we don't have that.",
            "th": "ไม่มีค่ะ",
            "v": "bad",
            "n": "The kitchen probably does. Go and ask.",
            "nTh": "ครัวน่าจะทำได้ ไปถามก่อน"
          }, {
            "t": "You can find som tam outside the hotel.",
            "th": "ส้มตำหาทานได้นอกโรงแรมค่ะ",
            "v": "bad",
            "n": "Never send a guest out of the resort for food we could make.",
            "nTh": "ห้ามส่งลูกค้าออกไปนอกรีสอร์ทเพื่อหาอาหารที่เราทำได้"
          }]
        }]
      }, {
        "id": "roomservice",
        "name": {
          "en": "Room Service by Phone",
          "th": "รับออเดอร์รูมเซอร์วิสทางโทรศัพท์"
        },
        "questions": [{
          "type": "gap",
          "scene": "The phone rings at 8 p.m.",
          "sceneTh": "โทรศัพท์ดังตอนสองทุ่ม",
          "ask": "Complete the greeting:",
          "askTh": "เติมคำทักทายให้ถูกต้อง",
          "sentence": ["Good evening. Room service", "____", ". How may I help you?"],
          "answer": "speaking",
          "pool": ["speaking", "talking", "calling", "hearing"],
          "th": "สวัสดีตอนเย็นค่ะ รูมเซอร์วิสค่ะ ให้ดิฉันช่วยอะไรได้บ้างคะ"
        }, {
          "type": "guest",
          "scene": "You have answered the phone.",
          "sceneTh": "คุณรับโทรศัพท์แล้ว",
          "guest": {
            "en": "Hello — I'd like to order some food.",
            "th": "สวัสดีครับ ผมอยากสั่งอาหาร"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "Certainly, sir. What would you like to order?",
            "th": "ได้ค่ะ ไม่ทราบว่าคุณต้องการสั่งอะไรคะ",
            "v": "best",
            "n": "Certainly first — the guest hears yes before anything else.",
            "nTh": "พูด Certainly ก่อน ลูกค้าได้ยินคำตอบรับก่อนอย่างอื่น"
          }, {
            "t": "OK. Tell me.",
            "th": "โอเค บอกมาเลย",
            "v": "ok",
            "n": "Understood, but blunt on the phone where they cannot see your face.",
            "nTh": "เข้าใจได้ แต่ห้วน โดยเฉพาะทางโทรศัพท์ที่ลูกค้าไม่เห็นหน้าคุณ"
          }, {
            "t": "The number in the menu, please.",
            "th": "บอกเบอร์ในเมนูมาค่ะ",
            "v": "bad",
            "n": "Do not make the guest work. Let them speak, then confirm the numbers.",
            "nTh": "อย่าให้ลูกค้าต้องทำงาน ให้เขาพูด แล้วเราค่อยยืนยันหมายเลข"
          }, {
            "t": "Wait, please.",
            "th": "รอสักครู่ค่ะ",
            "v": "bad",
            "n": "Never open by making a guest wait.",
            "nTh": "ห้ามเปิดสายด้วยการให้ลูกค้ารอ"
          }]
        }, {
          "type": "choice",
          "scene": "The guest has ordered a pork fillet and prawns with chips, room 1200.",
          "sceneTh": "ลูกค้าสั่งเนื้อหมูฟิเล่ และกุ้งกับมันฝรั่งทอด ห้อง 1200",
          "ask": "Before you hang up, the single most important thing is:",
          "askTh": "ก่อนวางสาย สิ่งที่สำคัญที่สุดคือ",
          "options": [{
            "t": "May I repeat your order and your room number? One number 15 pork fillet, one number 19 prawns and chips, room 1200. Is that correct?",
            "th": "ขออนุญาตทวนรายการอาหารและหมายเลขห้องค่ะ เบอร์ 15 เนื้อหมูฟิเล่ 1 ที่ เบอร์ 19 กุ้งกับมันฝรั่งทอด 1 ที่ ห้อง 1200 ถูกต้องไหมคะ",
            "v": "best",
            "n": "Repeat the order AND the room number. Every time. This is the whole job on the phone.",
            "nTh": "ทวนทั้งรายการอาหารและหมายเลขห้อง ทุกครั้ง นี่คือหัวใจของการรับสาย"
          }, {
            "t": "May I repeat your order? One pork fillet and one prawns and chips.",
            "th": "ขออนุญาตทวนรายการค่ะ เนื้อหมูฟิเล่ 1 กุ้งกับมันฝรั่ง 1",
            "v": "ok",
            "n": "You repeated the food but not the room. The tray will go to the wrong door.",
            "nTh": "คุณทวนอาหารแต่ไม่ทวนเลขห้อง ถาดอาหารจะไปผิดห้อง"
          }, {
            "t": "OK, we send it now.",
            "th": "โอเค เดี๋ยวส่งไปให้",
            "v": "bad",
            "n": "Nothing confirmed. This order will be wrong.",
            "nTh": "ไม่ได้ยืนยันอะไรเลย ออเดอร์นี้จะผิดแน่นอน"
          }, {
            "t": "Thank you. Goodbye.",
            "th": "ขอบคุณค่ะ สวัสดีค่ะ",
            "v": "bad",
            "n": "You have confirmed nothing at all.",
            "nTh": "คุณไม่ได้ยืนยันอะไรเลยสักอย่าง"
          }]
        }, {
          "type": "order",
          "scene": "The guest asks how long the food will take.",
          "sceneTh": "ลูกค้าถามว่าอาหารใช้เวลานานเท่าไหร่",
          "ask": "Put the words in order:",
          "askTh": "เรียงคำให้ถูกต้อง",
          "words": ["Your", "order", "will", "take", "about", "thirty", "minutes"],
          "th": "อาหารของคุณจะใช้เวลาประมาณ 30 นาทีค่ะ"
        }, {
          "type": "choice",
          "scene": "The order is confirmed and you are ending the call.",
          "sceneTh": "ยืนยันออเดอร์แล้ว กำลังจะวางสาย",
          "ask": "How do you close?",
          "askTh": "คุณจะปิดการสนทนาอย่างไร",
          "options": [{
            "t": "Thank you very much for calling room service. Have a lovely evening, sir.",
            "th": "ขอบคุณมากค่ะที่โทรหารูมเซอร์วิส ขอให้มีค่ำคืนที่ดีนะคะ",
            "v": "best",
            "n": "Thank them for calling, then a warm close. Say it while you are still smiling.",
            "nTh": "ขอบคุณที่โทรมา แล้วปิดท้ายอย่างอบอุ่น พูดตอนที่ยังยิ้มอยู่"
          }, {
            "t": "Thank you. Goodbye.",
            "th": "ขอบคุณค่ะ สวัสดีค่ะ",
            "v": "ok",
            "n": "Correct, but the guest cannot see you — your voice is all the service they get.",
            "nTh": "ถูกต้อง แต่ลูกค้าไม่เห็นหน้าคุณ น้ำเสียงคือบริการทั้งหมดที่เขาได้รับ"
          }, {
            "t": "OK bye.",
            "th": "โอเค บาย",
            "v": "bad",
            "n": "Too casual.",
            "nTh": "กันเองเกินไป"
          }, {
            "t": "[Hang up first]",
            "th": "[วางสายก่อน]",
            "v": "bad",
            "n": "Never hang up before the guest does.",
            "nTh": "ห้ามวางสายก่อนลูกค้า"
          }]
        }]
      }, {
        "id": "recommend",
        "name": {
          "en": "Recommending & Small Talk",
          "th": "แนะนำห้องอาหารและการสนทนา"
        },
        "questions": [{
          "type": "choice",
          "scene": "Morning. A guest is standing at the restaurant board, reading it.",
          "sceneTh": "ตอนเช้า ลูกค้ายืนอ่านป้ายห้องอาหาร",
          "ask": "Open the conversation.",
          "askTh": "เริ่มบทสนทนา",
          "options": [{
            "t": "Good morning. Have you planned your dinner for tonight? Would you like me to recommend a restaurant?",
            "th": "สวัสดีตอนเช้าค่ะ ไม่ทราบว่าคุณมีแผนสำหรับมื้อค่ำคืนนี้หรือยังคะ ให้ดิฉันแนะนำห้องอาหารไหมคะ",
            "v": "best",
            "n": "Do not wait to be asked. This is how the evening covers get filled.",
            "nTh": "อย่ารอให้ลูกค้าถาม นี่คือวิธีทำให้โต๊ะเต็มในตอนเย็น"
          }, {
            "t": "Good morning. Can I help you?",
            "th": "สวัสดีค่ะ ให้ช่วยอะไรไหมคะ",
            "v": "ok",
            "n": "Polite, but it invites 'no thank you'. Ask about their dinner.",
            "nTh": "สุภาพ แต่เปิดช่องให้ลูกค้าตอบว่าไม่ ให้ถามเรื่องมื้อค่ำเลย"
          }, {
            "t": "The menu is on the board.",
            "th": "เมนูอยู่บนป้ายค่ะ",
            "v": "bad",
            "n": "They can see that. You are there to sell.",
            "nTh": "ลูกค้าเห็นอยู่แล้ว คุณอยู่ตรงนั้นเพื่อขาย"
          }, {
            "t": "[Say nothing and walk past]",
            "th": "[ไม่พูดอะไรแล้วเดินผ่านไป]",
            "v": "bad",
            "n": "That is a booking lost.",
            "nTh": "นั่นคือการเสียยอดจองไปหนึ่งราย"
          }]
        }, {
          "type": "choice",
          "scene": "The guest says yes, they would like a recommendation.",
          "sceneTh": "ลูกค้าตอบตกลง อยากให้แนะนำ",
          "ask": "What do you ask?",
          "askTh": "คุณจะถามอะไร",
          "options": [{
            "t": "What kind of food do you like — seafood, Italian, Thai, or buffet?",
            "th": "คุณชอบอาหารประเภทไหนคะ ซีฟู้ด อิตาเลียน ไทย หรือบุฟเฟ่ต์คะ",
            "v": "best",
            "n": "Give them the choices. It is much easier than an open question.",
            "nTh": "ให้ตัวเลือกไปเลย ง่ายกว่าถามแบบเปิดกว้าง"
          }, {
            "t": "What do you want to eat?",
            "th": "อยากทานอะไรคะ",
            "v": "ok",
            "n": "Too open. Most guests will not know how to answer.",
            "nTh": "กว้างเกินไป ลูกค้าส่วนใหญ่ตอบไม่ถูก"
          }, {
            "t": "You should go to the buffet.",
            "th": "ไปบุฟเฟ่ต์เลยค่ะ",
            "v": "bad",
            "n": "Ask first. Recommend second.",
            "nTh": "ถามก่อน แล้วค่อยแนะนำ"
          }, {
            "t": "All our restaurants are good.",
            "th": "ห้องอาหารเราดีทุกที่ค่ะ",
            "v": "bad",
            "n": "This tells them nothing and sells nothing.",
            "nTh": "ไม่ได้บอกอะไร และขายไม่ได้"
          }]
        }, {
          "type": "choice",
          "scene": "The guest likes seafood.",
          "sceneTh": "ลูกค้าชอบซีฟู้ด",
          "ask": "Sell {{outlet.signature}} Restaurant.",
          "askTh": "ขายห้องอาหาร{{outlet.signature}}",
          "options": [{
            "t": "I would recommend {{outlet.signature}}, right on the beach. You can watch the sunset while you have dinner, we have live music, and our chef will cook the fresh seafood any way you like.",
            "th": "ขอแนะนำห้องอาหาร{{outlet.signature}}ค่ะ ตั้งอยู่ริมหาดเลย คุณสามารถชมพระอาทิตย์ตกระหว่างทานอาหารค่ำ มีดนตรีสด และเชฟของเราปรุงอาหารทะเลสด ๆ ตามที่คุณต้องการได้ค่ะ",
            "v": "best",
            "n": "Location, the sunset, the music, the fresh display. Paint the evening, don't list the facts.",
            "nTh": "ทำเล พระอาทิตย์ตก ดนตรี ซีฟู้ดสด วาดภาพค่ำคืนให้ลูกค้าเห็น ไม่ใช่แค่บอกข้อมูล"
          }, {
            "t": "{{outlet.signature}} Restaurant serves seafood. It is on the beach.",
            "th": "ห้องอาหาร{{outlet.signature}}เสิร์ฟซีฟู้ด อยู่ริมหาดค่ะ",
            "v": "ok",
            "n": "Both true. Neither of them makes a booking.",
            "nTh": "จริงทั้งสองอย่าง แต่ไม่ทำให้ลูกค้าจอง"
          }, {
            "t": "{{outlet.signature}} is our seafood restaurant.",
            "th": "{{outlet.signature}}คือห้องอาหารซีฟู้ดของเราค่ะ",
            "v": "bad",
            "n": "You gave a name, not a reason.",
            "nTh": "คุณให้แค่ชื่อ ไม่ได้ให้เหตุผล"
          }, {
            "t": "It is quite expensive but it is good.",
            "th": "ค่อนข้างแพงนะคะ แต่ดีค่ะ",
            "v": "bad",
            "n": "Never introduce a price objection yourself.",
            "nTh": "ห้ามเป็นคนหยิบเรื่องราคาแพงขึ้นมาเอง"
          }]
        }, {
          "type": "guest",
          "scene": "The guest is interested in the buffet tonight. It is Thai Night, with the dance show at 7:30.",
          "sceneTh": "ลูกค้าสนใจบุฟเฟ่ต์คืนนี้ คืนนี้คือไทยไนท์ มีรำไทย 19:30 น.",
          "guest": {
            "en": "What buffet do you have tonight?",
            "th": "คืนนี้มีบุฟเฟ่ต์อะไร"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "Tonight is our Thai Night Buffet, and we have a Thai classical dance show at 7:30 p.m.",
            "th": "คืนนี้เป็นไทยไนท์บุฟเฟ่ต์ค่ะ และมีการแสดงรำไทยเวลา 19:30 น. ค่ะ",
            "v": "best",
            "n": "The theme AND the show. The show is what makes them book.",
            "nTh": "บอกทั้งธีมและการแสดง การแสดงคือสิ่งที่ทำให้ลูกค้าจอง"
          }, {
            "t": "Tonight is Thai Night Buffet.",
            "th": "คืนนี้เป็นไทยไนท์บุฟเฟ่ต์ค่ะ",
            "v": "ok",
            "n": "You left out the show — that is the part that sells the table.",
            "nTh": "คุณลืมบอกเรื่องการแสดง ซึ่งเป็นตัวขายโต๊ะ"
          }, {
            "t": "It is Thai food.",
            "th": "เป็นอาหารไทยค่ะ",
            "v": "bad",
            "n": "Say the name of the theme night.",
            "nTh": "ต้องบอกชื่อธีมของคืนนั้น"
          }, {
            "t": "I am not sure, please check the board.",
            "th": "ไม่แน่ใจค่ะ ลองดูที่ป้ายนะคะ",
            "v": "bad",
            "n": "You must know tonight's theme before your shift starts.",
            "nTh": "คุณต้องรู้ธีมของคืนนั้นก่อนเข้ากะ"
          }]
        }, {
          "type": "guest",
          "scene": "The guest wants to book.",
          "sceneTh": "ลูกค้าต้องการจองโต๊ะ",
          "guest": {
            "en": "OK, I'll go to {{outlet.signature}} tonight.",
            "th": "ตกลง คืนนี้ไปห้องอาหาร{{outlet.signature}}นะ"
          },
          "ask": "Take the booking.",
          "askTh": "รับจอง",
          "options": [{
            "t": "Certainly, sir. May I have your room number, and for what time and how many people?",
            "th": "ได้ค่ะ ขอทราบหมายเลขห้อง เวลา และจำนวนท่านด้วยค่ะ",
            "v": "best",
            "n": "Room number, time, number of people. Then repeat all three back.",
            "nTh": "เลขห้อง เวลา จำนวนคน แล้วทวนทั้งสามอย่าง"
          }, {
            "t": "Certainly, sir. What time?",
            "th": "ได้ค่ะ กี่โมงคะ",
            "v": "ok",
            "n": "You will lose the room number and the cover count.",
            "nTh": "คุณจะไม่ได้เลขห้องและจำนวนคน"
          }, {
            "t": "OK, just come at seven.",
            "th": "โอเค มาตอนหนึ่งทุ่มเลยค่ะ",
            "v": "bad",
            "n": "Nothing is written down. This booking does not exist.",
            "nTh": "ไม่ได้จดอะไรเลย การจองนี้ไม่มีอยู่จริง"
          }, {
            "t": "You can just walk in.",
            "th": "เดินเข้ามาได้เลยค่ะ",
            "v": "bad",
            "n": "Then the table will be gone and it will be our fault.",
            "nTh": "แล้วโต๊ะจะเต็ม และจะกลายเป็นความผิดของเรา"
          }]
        }, {
          "type": "guest",
          "scene": "Making conversation with a European guest at the buffet.",
          "sceneTh": "คุยกับลูกค้าชาวยุโรปที่บุฟเฟ่ต์",
          "guest": {
            "en": "Yes, we're from Italy.",
            "th": "ใช่ค่ะ เรามาจากอิตาลี"
          },
          "ask": "Keep the conversation going. Careful here.",
          "askTh": "สนทนาต่อ ระวังข้อนี้ให้ดี",
          "options": [{
            "t": "Which part of Italy are you from? I hear the food there is wonderful.",
            "th": "คุณมาจากส่วนไหนของอิตาลีคะ ได้ยินว่าอาหารที่นั่นอร่อยมากเลย",
            "v": "best",
            "n": "Ask about their country. It is always safe, and guests love to talk about home.",
            "nTh": "ถามเรื่องประเทศของเขา ปลอดภัยเสมอ และลูกค้าชอบเล่าเรื่องบ้านเกิด"
          }, {
            "t": "Italian people have beautiful eyes.",
            "th": "คนอิตาเลียนตาสวยนะคะ",
            "v": "bad",
            "n": "The manual itself warns about this line. Never comment on a guest's body or looks — it sounds like flirting, and it is a complaint waiting to happen.",
            "nTh": "คู่มือเตือนไว้เองเรื่องประโยคนี้ ห้ามวิจารณ์รูปร่างหน้าตาลูกค้า ฟังดูเหมือนจีบ และเป็นเรื่องร้องเรียนที่รอเกิดขึ้น"
          }, {
            "t": "Italy is very expensive, isn't it?",
            "th": "อิตาลีแพงมากใช่ไหมคะ",
            "v": "bad",
            "n": "Never talk about money with a guest.",
            "nTh": "ห้ามคุยเรื่องเงินกับลูกค้า"
          }, {
            "t": "Oh, Italy. Nice.",
            "th": "อ๋อ อิตาลี ดีนะคะ",
            "v": "ok",
            "n": "Safe, but the conversation dies. Ask them a question.",
            "nTh": "ปลอดภัย แต่บทสนทนาจบ ต้องถามคำถามกลับ"
          }]
        }, {
          "type": "guest",
          "scene": "May. Grey sky, a big swell on the beach, and a red flag on the sand.",
          "sceneTh": "เดือนพฤษภาคม ฟ้าครึ้ม คลื่นใหญ่ และมีธงแดงปักอยู่บนหาด",
          "guest": {
            "en": "Can we swim in the sea today?",
            "th": "วันนี้ลงเล่นน้ำทะเลได้ไหม"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "The sea has big waves today — it is monsoon season. Please look at the flags: if the flag is red, you should not swim.",
            "th": "วันนี้ทะเลมีคลื่นใหญ่ค่ะ เป็นช่วงมรสุม กรุณาสังเกตธงนะคะ ถ้าธงสีแดง ไม่ควรลงเล่นน้ำค่ะ",
            "v": "best",
            "n": "Say it clearly and give them the rule. This one is safety, not service.",
            "nTh": "พูดให้ชัด และบอกกฎ ข้อนี้คือความปลอดภัย ไม่ใช่การบริการ"
          }, {
            "t": "It is a little rough today.",
            "th": "วันนี้คลื่นแรงนิดหน่อยค่ะ",
            "v": "ok",
            "n": "Far too soft. Say the red flag, and say do not swim.",
            "nTh": "เบาเกินไปมาก ต้องบอกเรื่องธงแดง และบอกว่าห้ามลงน้ำ"
          }, {
            "t": "Yes, it is fine.",
            "th": "ได้ค่ะ ไม่มีปัญหา",
            "v": "bad",
            "n": "Never. A red flag means no swimming, and this answer could kill someone.",
            "nTh": "ห้ามเด็ดขาด ธงแดงคือห้ามลงน้ำ คำตอบนี้อาจทำให้มีคนเสียชีวิต"
          }, {
            "t": "Up to you, madam.",
            "th": "แล้วแต่คุณเลยค่ะ",
            "v": "bad",
            "n": "It is not up to the guest. The flag decides.",
            "nTh": "ไม่ใช่เรื่องที่ลูกค้าจะเลือกเอง ธงเป็นตัวตัดสิน"
          }]
        }, {
          "type": "guest",
          "scene": "It rained this morning and the guest is disappointed.",
          "sceneTh": "เช้านี้ฝนตก ลูกค้าผิดหวัง",
          "guest": {
            "en": "Is it going to rain like this all week?",
            "th": "ฝนจะตกแบบนี้ทั้งอาทิตย์เลยไหม"
          },
          "ask": "Reassure them.",
          "askTh": "ทำให้ลูกค้าสบายใจ",
          "options": [{
            "t": "The rain doesn't last long here. There is still plenty of sunshine, and there are fewer tourists now, so you will have the beach almost to yourself.",
            "th": "ฝนที่นี่ตกไม่นานค่ะ ยังมีแดดให้คุณได้เพลิดเพลิน และช่วงนี้นักท่องเที่ยวน้อย คุณแทบจะมีชายหาดเป็นของตัวเองเลยค่ะ",
            "v": "best",
            "n": "Turn the rain into an advantage. Fewer tourists, more privacy — this is true, and it works.",
            "nTh": "เปลี่ยนฝนให้เป็นข้อดี นักท่องเที่ยวน้อย ความเป็นส่วนตัวมาก เป็นเรื่องจริง และได้ผล"
          }, {
            "t": "It is the rainy season, but it does not rain every day.",
            "th": "เป็นฤดูฝนค่ะ แต่ฝนไม่ได้ตกทุกวันนะคะ",
            "v": "ok",
            "n": "Honest and correct — but you can do better. Give them a reason to be glad they came now.",
            "nTh": "ซื่อสัตย์และถูกต้อง แต่ทำได้ดีกว่านี้ ให้เหตุผลที่เขาจะดีใจที่มาช่วงนี้"
          }, {
            "t": "Yes, it rains a lot in May.",
            "th": "ค่ะ เดือนพฤษภาคมฝนตกเยอะ",
            "v": "bad",
            "n": "You just confirmed their worst fear and offered nothing.",
            "nTh": "คุณเพิ่งยืนยันสิ่งที่ลูกค้ากลัวที่สุด และไม่ได้เสนออะไรเลย"
          }, {
            "t": "I don't know, I am not the weather.",
            "th": "ไม่ทราบค่ะ ดิฉันไม่ใช่ฟ้าฝน",
            "v": "bad",
            "n": "Never joke away a guest's real concern.",
            "nTh": "ห้ามล้อเล่นกับความกังวลจริง ๆ ของลูกค้า"
          }]
        }, {
          "type": "guest",
          "scene": "A guest asks what there is to see nearby.",
          "sceneTh": "ลูกค้าถามว่าแถวนี้มีที่เที่ยวอะไรบ้าง",
          "guest": {
            "en": "Is there anything interesting to visit around here?",
            "th": "แถวนี้มีที่เที่ยวน่าสนใจไหม"
          },
          "ask": "Recommend something.",
          "askTh": "แนะนำสถานที่",
          "options": [{
            "t": "I would recommend {{local.museum}} — about ten minutes by taxi. It is opposite {{local.market}}, which is open {{local.marketDays}}, from {{local.marketHours}}",
            "th": "ขอแนะนำ{{local.museum}}ค่ะ นั่งแท็กซี่ประมาณ 10 นาที อยู่ตรงข้าม{{local.market}} ซึ่งเปิด{{local.marketDays}} ตั้งแต่ {{local.marketHours}} ค่ะ",
            "v": "best",
            "n": "Name it, say how far, give the opening days. A recommendation with no details is not a recommendation.",
            "nTh": "บอกชื่อ บอกระยะทาง บอกวันเปิด การแนะนำที่ไม่มีรายละเอียดไม่ใช่การแนะนำ"
          }, {
            "t": "There is a museum and a market not far from here.",
            "th": "มีพิพิธภัณฑ์กับตลาดอยู่ไม่ไกลค่ะ",
            "v": "ok",
            "n": "Vague. Give the name, the distance and the days.",
            "nTh": "คลุมเครือ ต้องบอกชื่อ ระยะทาง และวัน"
          }, {
            "t": "Not really. It is quiet here.",
            "th": "ไม่ค่อยมีค่ะ แถวนี้เงียบ",
            "v": "bad",
            "n": "Never tell a guest there is nothing to do.",
            "nTh": "ห้ามบอกลูกค้าว่าไม่มีอะไรทำ"
          }, {
            "t": "Ask at the tour desk.",
            "th": "ไปถามที่เคาน์เตอร์ทัวร์นะคะ",
            "v": "bad",
            "n": "You can answer this yourself. Do not pass a guest along.",
            "nTh": "คุณตอบเองได้ อย่าโยนลูกค้าไปให้คนอื่น"
          }]
        }]
      }]
    },
    "fo-resort-host": {
      "id": "fo-resort-host",
      "name": {
        "en": "Resort Host",
        "th": "รีสอร์ทโฮสต์"
      },
      "guestFacing": true,
      "source": "FOTLKL — English for Resort Host (The Little Shore)",
      "inherits": ["core-service-standard"],
      "units": [{
        "id": "welcome",
        "name": {
          "en": "Welcome & Greeting",
          "th": "ต้อนรับและทักทาย"
        },
        "questions": [{
          "type": "choice",
          "scene": "A guest arrives at {{property.name}} and comes up to your desk. You greet them with a wai.",
          "sceneTh": "แขกเดินทางมาถึง{{property.name}}และเดินมาที่เคาน์เตอร์ คุณไหว้ทักทาย",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Sawasdee kha, welcome ashore. Welcome to {{property.name}}.\"",
            "th": "\"สวัสดีค่ะ ยินดีต้อนรับสู่{{property.name}}ค่ะ\"",
            "v": "best",
            "n": "The wai first, then a warm welcome with the resort's name. 'Welcome ashore' is the resort's own signature greeting.",
            "nTh": "ไหว้ก่อน แล้วต้อนรับอย่างอบอุ่นพร้อมบอกชื่อรีสอร์ท 'Welcome ashore' คือคำต้อนรับประจำของรีสอร์ท"
          }, {
            "t": "\"Hello. Check-in?\"",
            "th": "\"สวัสดีค่ะ เช็คอินไหมคะ\"",
            "v": "ok",
            "n": "Correct, but cold. The guest has travelled a long way to reach us — welcome them warmly first.",
            "nTh": "ถูก แต่เย็นชา แขกเดินทางมาไกลกว่าจะถึงเรา ต้อนรับอย่างอบอุ่นก่อน"
          }, {
            "t": "\"Wait there, someone will come.\"",
            "th": "\"รอตรงนั้นนะคะ เดี๋ยวมีคนมา\"",
            "v": "bad",
            "n": "Never leave an arriving guest standing. You are the welcome.",
            "nTh": "ห้ามปล่อยแขกที่เพิ่งมาถึงยืนรอ คุณคือการต้อนรับ"
          }, {
            "t": "\"You are late, we expected you earlier.\"",
            "th": "\"มาสายนะคะ เรานึกว่าจะมาถึงเร็วกว่านี้\"",
            "v": "bad",
            "n": "Never comment on timing. The guest's arrival is a happy moment, not a problem.",
            "nTh": "ห้ามพูดเรื่องเวลา การมาถึงของแขกเป็นช่วงเวลาที่ดี ไม่ใช่ปัญหา"
          }]
        }, {
          "type": "choice",
          "scene": "The guest looks tired from a long journey. You want to make them feel at home.",
          "sceneTh": "แขกดูเหนื่อยจากการเดินทางไกล คุณอยากทำให้เขารู้สึกเหมือนอยู่บ้าน",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Welcome back home. How was your flight?\"",
            "th": "\"ยินดีต้อนรับกลับบ้านค่ะ การเดินทางเป็นอย่างไรบ้างคะ\"",
            "v": "best",
            "n": "'Welcome home' and a question about their journey — warm, personal, and it opens a conversation.",
            "nTh": "'ยินดีต้อนรับกลับบ้าน' และถามถึงการเดินทาง อบอุ่น เป็นกันเอง และเปิดบทสนทนา"
          }, {
            "t": "\"You look very tired.\"",
            "th": "\"คุณดูเหนื่อยมากเลยนะคะ\"",
            "v": "bad",
            "n": "Never tell a guest they look tired. Notice it, but say something kind instead.",
            "nTh": "ห้ามบอกแขกว่าดูเหนื่อย สังเกตได้ แต่ให้พูดสิ่งดี ๆ แทน"
          }, {
            "t": "\"Please fill in this form first.\"",
            "th": "\"กรุณากรอกแบบฟอร์มนี้ก่อนค่ะ\"",
            "v": "ok",
            "n": "Paperwork can wait a moment. Greet the person before the process.",
            "nTh": "เอกสารรอสักครู่ได้ ทักทายแขกก่อนเริ่มขั้นตอน"
          }, {
            "t": "\"How was your flight?\"",
            "th": "\"การเดินทางเป็นอย่างไรบ้างคะ\"",
            "v": "ok",
            "n": "A good question, but lead with the welcome — the warmth is what they remember.",
            "nTh": "คำถามดี แต่เริ่มด้วยการต้อนรับก่อน ความอบอุ่นคือสิ่งที่แขกจำได้"
          }]
        }, {
          "type": "choice",
          "scene": "You bring the guest to the lobby to sit down after their journey.",
          "sceneTh": "คุณพาแขกมานั่งที่ล็อบบี้หลังการเดินทาง",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Please have a seat. This is your welcome drink and a fresh cold towel.\"",
            "th": "\"เชิญนั่งค่ะ นี่คือเครื่องดื่มต้อนรับและผ้าเย็นค่ะ\"",
            "v": "best",
            "n": "Seat them, then the welcome drink and cold towel. Small comforts after a long trip matter most.",
            "nTh": "เชิญนั่ง แล้วเสิร์ฟเครื่องดื่มต้อนรับและผ้าเย็น ความสบายเล็ก ๆ หลังเดินทางไกลสำคัญที่สุด"
          }, {
            "t": "Hand over the towel without a word.",
            "th": "ยื่นผ้าเย็นให้โดยไม่พูดอะไร",
            "v": "ok",
            "n": "The gesture is right, but say what it is — a warm word turns a towel into hospitality.",
            "nTh": "ท่าทางถูก แต่บอกด้วยว่าคืออะไร คำพูดอบอุ่นเปลี่ยนผ้าเย็นให้เป็นการต้อนรับ"
          }, {
            "t": "\"Drinks are extra, would you like one?\"",
            "th": "\"เครื่องดื่มคิดเงินเพิ่มนะคะ รับไหมคะ\"",
            "v": "bad",
            "n": "The welcome drink is a gift, never a sale. Never put a price on the welcome.",
            "nTh": "เครื่องดื่มต้อนรับคือของขวัญ ไม่ใช่การขาย ห้ามตั้งราคากับการต้อนรับ"
          }, {
            "t": "\"Sit anywhere.\"",
            "th": "\"นั่งตรงไหนก็ได้ค่ะ\"",
            "v": "ok",
            "n": "Fine, but a guided 'please have a seat' feels cared-for, not left to fend for themselves.",
            "nTh": "ก็ได้ แต่ 'เชิญนั่งค่ะ' ที่นำทางทำให้แขกรู้สึกได้รับการดูแล"
          }]
        }, {
          "type": "guest",
          "scene": "The guest has settled in the lobby with their welcome drink.",
          "sceneTh": "แขกนั่งลงที่ล็อบบี้พร้อมเครื่องดื่มต้อนรับ",
          "guest": {
            "en": "It's our first time here. It looks beautiful.",
            "th": "นี่เป็นครั้งแรกของเราที่นี่ ดูสวยงามมาก"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Happy to have you with us. May I help you check in, and then I'll show you around?\"",
            "th": "\"ยินดีที่ได้ต้อนรับค่ะ ขออนุญาตช่วยเช็คอินให้ แล้วเดี๋ยวพาชมรอบ ๆ นะคะ\"",
            "v": "best",
            "n": "Warm reply, then guide them forward. First-time guests remember the host who took care of them.",
            "nTh": "ตอบอย่างอบอุ่น แล้วนำทางต่อ แขกครั้งแรกจะจำโฮสต์ที่ดูแลเขา"
          }, {
            "t": "\"Yes, it's nice.\"",
            "th": "\"ค่ะ สวยดีค่ะ\"",
            "v": "ok",
            "n": "Not wrong, but flat. Match their excitement and move them into their stay.",
            "nTh": "ไม่ผิด แต่เรียบ ๆ รับพลังความตื่นเต้นของแขกและพาเข้าสู่การเข้าพัก"
          }, {
            "t": "\"Everyone says that.\"",
            "th": "\"ใคร ๆ ก็พูดแบบนั้นค่ะ\"",
            "v": "bad",
            "n": "This shrinks their moment. Let their first impression be theirs.",
            "nTh": "คำนี้ลดทอนช่วงเวลาของแขก ปล่อยให้ความประทับใจแรกเป็นของเขา"
          }, {
            "t": "\"Please wait, I'm busy now.\"",
            "th": "\"รอสักครู่นะคะ ตอนนี้ยุ่งอยู่\"",
            "v": "bad",
            "n": "Never tell an arriving guest you are too busy for them.",
            "nTh": "ห้ามบอกแขกที่เพิ่งมาถึงว่าคุณยุ่งเกินกว่าจะดูแลเขา"
          }]
        }]
      }, {
        "id": "checkin",
        "name": {
          "en": "Check-In",
          "th": "เช็คอิน"
        },
        "questions": [{
          "type": "choice",
          "scene": "You are ready to start the check-in and need to find the booking.",
          "sceneTh": "คุณพร้อมเริ่มเช็คอินและต้องค้นหาการจอง",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"May I have your reservation name, please?\"",
            "th": "\"ขอทราบชื่อในการจองด้วยค่ะ\"",
            "v": "best",
            "n": "'May I' and 'please' — the polite way to ask. Start with the name to find the booking.",
            "nTh": "'May I' และ 'please' คือวิธีขออย่างสุภาพ เริ่มด้วยชื่อเพื่อค้นหาการจอง"
          }, {
            "t": "\"Name?\"",
            "th": "\"ชื่ออะไรคะ\"",
            "v": "ok",
            "n": "Understandable, but one word sounds like an interrogation. Use the full polite question.",
            "nTh": "เข้าใจได้ แต่คำเดียวฟังดูเหมือนสอบสวน ใช้ประโยคขอที่สุภาพเต็ม"
          }, {
            "t": "\"Give me your passport.\"",
            "th": "\"เอาพาสปอร์ตมาค่ะ\"",
            "v": "bad",
            "n": "'Give me' is an order. Always ask — 'May I have...' — and say why.",
            "nTh": "'เอามา' คือคำสั่ง ให้ขอเสมอ 'ขอ...ได้ไหมคะ' และบอกเหตุผล"
          }, {
            "t": "\"You have a booking or not?\"",
            "th": "\"มีจองหรือเปล่าคะ\"",
            "v": "bad",
            "n": "Sounds like a challenge. Assume they are our guest and ask kindly for the name.",
            "nTh": "ฟังดูเหมือนตั้งคำถามท้าทาย ให้ถือว่าเขาคือแขกของเราและขอชื่ออย่างสุภาพ"
          }]
        }, {
          "type": "choice",
          "scene": "You need the guest's passports and a card to guarantee incidental charges.",
          "sceneTh": "คุณต้องขอพาสปอร์ตของแขกและบัตรเพื่อการันตีค่าใช้จ่ายเพิ่มเติม",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"May I have both passports, and a credit card to guarantee, please?\"",
            "th": "\"ขอพาสปอร์ตของทั้งสองท่าน และบัตรเครดิตสำหรับการันตีด้วยค่ะ\"",
            "v": "best",
            "n": "Ask for both together, politely, so the guest hands them over once and relaxes.",
            "nTh": "ขอทั้งสองอย่างพร้อมกันอย่างสุภาพ แขกจะยื่นให้ครั้งเดียวและสบายใจ"
          }, {
            "t": "\"I need your credit card. It's the rule.\"",
            "th": "\"ต้องใช้บัตรเครดิตค่ะ เป็นกฎ\"",
            "v": "bad",
            "n": "Never say 'it's the rule'. Explain it is only to guarantee, and ask politely.",
            "nTh": "ห้ามพูดว่า 'เป็นกฎ' อธิบายว่าเป็นแค่การการันตี และขออย่างสุภาพ"
          }, {
            "t": "\"Passport.\"",
            "th": "\"พาสปอร์ตค่ะ\"",
            "v": "ok",
            "n": "They will understand, but a one-word demand is cold. Ask the full polite question.",
            "nTh": "แขกเข้าใจ แต่คำสั่งคำเดียวเย็นชา ใช้ประโยคขอที่สุภาพเต็ม"
          }, {
            "t": "\"Don't worry, no card needed.\"",
            "th": "\"ไม่ต้องห่วงค่ะ ไม่ต้องใช้บัตร\"",
            "v": "bad",
            "n": "Do not skip the guarantee to avoid an awkward moment — explain it warmly instead.",
            "nTh": "อย่าข้ามการการันตีเพื่อเลี่ยงความอึดอัด ให้อธิบายอย่างอบอุ่นแทน"
          }]
        }, {
          "type": "choice",
          "scene": "You want the guest to be able to enjoy the resort without carrying cash.",
          "sceneTh": "คุณอยากให้แขกใช้บริการในรีสอร์ทได้โดยไม่ต้องพกเงินสด",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"During your stay, please feel free to charge everything to your room.\"",
            "th": "\"ระหว่างเข้าพัก เชิญเซ็นค่าใช้จ่ายทั้งหมดเข้าห้องได้เลยค่ะ\"",
            "v": "best",
            "n": "Tell them they can charge to the room — it removes friction and feels generous.",
            "nTh": "บอกว่าเซ็นเข้าห้องได้ ช่วยลดความยุ่งยากและรู้สึกใจดี"
          }, {
            "t": "\"You have to pay cash everywhere.\"",
            "th": "\"ต้องจ่ายเงินสดทุกที่นะคะ\"",
            "v": "bad",
            "n": "Untrue and unhelpful. Charging to the room is the whole convenience of staying with us.",
            "nTh": "ไม่จริงและไม่ช่วยอะไร การเซ็นเข้าห้องคือความสะดวกของการพักกับเรา"
          }, {
            "t": "\"Payment is your problem.\"",
            "th": "\"เรื่องจ่ายเงินเป็นเรื่องของคุณเองนะคะ\"",
            "v": "bad",
            "n": "Never. Make everything easy for the guest.",
            "nTh": "ห้ามเด็ดขาด ทำให้ทุกอย่างง่ายสำหรับแขก"
          }, {
            "t": "\"Just charge to the room.\"",
            "th": "\"เซ็นเข้าห้องเอาค่ะ\"",
            "v": "ok",
            "n": "Right information, but a warmer, fuller sentence makes it feel like an offer, not an instruction.",
            "nTh": "ข้อมูลถูก แต่ประโยคที่อบอุ่นและครบทำให้รู้สึกเหมือนข้อเสนอ ไม่ใช่คำสั่ง"
          }]
        }, {
          "type": "guest",
          "scene": "It is early. The guest has arrived before the room is ready.",
          "sceneTh": "ยังเช้าอยู่ แขกมาถึงก่อนที่ห้องจะพร้อม",
          "guest": {
            "en": "Can we go to our room now?",
            "th": "เราขึ้นห้องได้เลยไหม"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"Check-in is from 3 p.m., and your room isn't quite ready yet. May I keep your bags and offer you a drink while you wait?\"",
            "th": "\"เช็คอินเริ่มบ่ายสามโมงค่ะ ห้องยังไม่พร้อมดีนัก ขออนุญาตเก็บกระเป๋าให้ และเชิญเครื่องดื่มระหว่างรอนะคะ\"",
            "v": "best",
            "n": "Give the honest reason, then solve the wait — bags kept, a drink, somewhere comfortable.",
            "nTh": "บอกเหตุผลตามจริง แล้วแก้เรื่องการรอ เก็บกระเป๋าให้ เครื่องดื่ม และที่นั่งสบาย ๆ"
          }, {
            "t": "\"No. Come back at 3 p.m.\"",
            "th": "\"ไม่ได้ค่ะ กลับมาตอนบ่ายสาม\"",
            "v": "bad",
            "n": "A flat 'no' with nowhere to go strands a tired guest. Offer to hold bags and make them comfortable.",
            "nTh": "'ไม่ได้' ห้วน ๆ โดยไม่มีทางออกทำให้แขกที่เหนื่อยค้างเติ่ง เสนอเก็บกระเป๋าและทำให้สบาย"
          }, {
            "t": "\"The room is ready, go ahead.\" (it isn't)\"",
            "th": "\"ห้องพร้อมแล้วค่ะ เชิญเลย\" (ทั้งที่ยังไม่พร้อม)",
            "v": "bad",
            "n": "Never send a guest to a room that isn't ready. They arrive to a mess and lose trust.",
            "nTh": "ห้ามส่งแขกไปห้องที่ยังไม่พร้อม แขกจะเจอห้องที่ยังไม่เรียบร้อยและเสียความไว้ใจ"
          }, {
            "t": "\"Your room is not ready yet.\"",
            "th": "\"ห้องของคุณยังไม่พร้อมค่ะ\"",
            "v": "ok",
            "n": "True, but it leaves the guest stuck. Add the time and offer to hold their bags.",
            "nTh": "จริง แต่ทำให้แขกค้าง เพิ่มเวลาและเสนอเก็บกระเป๋าให้"
          }]
        }, {
          "type": "choice",
          "scene": "The room is now ready and you want to confirm the guest's contact details for their folio.",
          "sceneTh": "ห้องพร้อมแล้ว และคุณต้องการยืนยันข้อมูลติดต่อของแขกสำหรับบัญชีห้องพัก",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Your room is ready. May I reconfirm your email and phone number, please?\"",
            "th": "\"ห้องพร้อมแล้วค่ะ ขอยืนยันอีเมลและเบอร์โทรของคุณอีกครั้งได้ไหมคะ\"",
            "v": "best",
            "n": "Good news first, then confirm details politely. 'Reconfirm' shows you already have them on file.",
            "nTh": "บอกข่าวดีก่อน แล้วยืนยันข้อมูลอย่างสุภาพ 'ยืนยันอีกครั้ง' แสดงว่าคุณมีข้อมูลอยู่แล้ว"
          }, {
            "t": "\"Email and phone number.\"",
            "th": "\"อีเมลกับเบอร์โทรค่ะ\"",
            "v": "ok",
            "n": "Understandable but abrupt. Wrap it in a polite question.",
            "nTh": "เข้าใจได้แต่ห้วน ใส่ไว้ในประโยคขอที่สุภาพ"
          }, {
            "t": "\"Why is your email different from the booking?\"",
            "th": "\"ทำไมอีเมลไม่ตรงกับที่จองคะ\"",
            "v": "bad",
            "n": "Do not interrogate over small mismatches. Just confirm the correct details kindly.",
            "nTh": "อย่าซักไซ้เรื่องข้อมูลไม่ตรงเล็กน้อย แค่ยืนยันข้อมูลที่ถูกต้องอย่างสุภาพ"
          }, {
            "t": "\"We don't need your phone number.\"",
            "th": "\"ไม่ต้องใช้เบอร์โทรหรอกค่ะ\"",
            "v": "bad",
            "n": "We do need it — to reach them about their room or transport. Confirm it warmly.",
            "nTh": "เราต้องใช้ เพื่อติดต่อเรื่องห้องหรือการเดินทาง ยืนยันอย่างอบอุ่น"
          }]
        }]
      }, {
        "id": "staychange",
        "name": {
          "en": "Extending & Changing the Room",
          "th": "ต่อวันพักและเปลี่ยนห้อง"
        },
        "questions": [{
          "type": "guest",
          "scene": "A guest comes to the desk during their stay.",
          "sceneTh": "แขกเดินมาที่เคาน์เตอร์ระหว่างเข้าพัก",
          "guest": {
            "en": "We're loving it here. Can we stay a few more nights?",
            "th": "เราชอบที่นี่มาก ขอพักต่ออีกสองสามคืนได้ไหม"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I'd be delighted. How many more nights would you like? Allow me to check availability for you.\"",
            "th": "\"ยินดีอย่างยิ่งค่ะ ต้องการพักต่ออีกกี่คืนดีคะ ขออนุญาตตรวจสอบห้องว่างให้นะคะ\"",
            "v": "best",
            "n": "Share their delight, ask the length, then check. Warm and efficient.",
            "nTh": "รับความยินดีของแขก ถามจำนวนคืน แล้วตรวจสอบ อบอุ่นและกระฉับกระเฉง"
          }, {
            "t": "\"Maybe. I'll see.\"",
            "th": "\"อาจจะได้ค่ะ เดี๋ยวดู\"",
            "v": "ok",
            "n": "Willing, but vague. Tell them you'll check availability and ask how many nights.",
            "nTh": "เต็มใจ แต่คลุมเครือ บอกว่าจะตรวจห้องว่างและถามจำนวนคืน"
          }, {
            "t": "\"We're probably full.\"",
            "th": "\"น่าจะเต็มค่ะ\"",
            "v": "bad",
            "n": "Don't guess a 'no'. Check first — a guest who wants to stay longer is a gift.",
            "nTh": "อย่าเดาว่า 'ไม่ได้' ตรวจสอบก่อน แขกที่อยากพักต่อคือสิ่งที่ดี"
          }, {
            "t": "\"You have to rebook online.\"",
            "th": "\"ต้องไปจองใหม่ออนไลน์เองค่ะ\"",
            "v": "bad",
            "n": "Never send a happy guest away to do our job. Handle the extension at the desk.",
            "nTh": "ห้ามไล่แขกที่พอใจไปทำงานของเราเอง จัดการต่อวันพักที่เคาน์เตอร์"
          }]
        }, {
          "type": "choice",
          "scene": "You have checked and the guest can extend. You quote the price.",
          "sceneTh": "คุณตรวจสอบแล้วและแขกสามารถพักต่อได้ คุณแจ้งราคา",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Absolutely, you can extend. The total for the additional 4 nights is 60,000 Baht, and that includes daily breakfast.\"",
            "th": "\"ได้แน่นอนค่ะ ค่าห้องเพิ่มอีก 4 คืน รวมเป็น 60,000 บาท และรวมอาหารเช้าทุกวันด้วยค่ะ\"",
            "v": "best",
            "n": "Say yes clearly, give the total, and mention breakfast is included — value, stated plainly.",
            "nTh": "ตอบรับชัดเจน แจ้งยอดรวม และบอกว่ารวมอาหารเช้า บอกความคุ้มค่าอย่างตรงไปตรงมา"
          }, {
            "t": "\"It's 60,000. Cash only.\"",
            "th": "\"60,000 ค่ะ รับแต่เงินสด\"",
            "v": "bad",
            "n": "We take cards too, and 'cash only' sounds like a demand. Quote the price and offer both.",
            "nTh": "เรารับบัตรด้วย และ 'รับแต่เงินสด' ฟังดูเหมือนบังคับ แจ้งราคาและเสนอทั้งสองแบบ"
          }, {
            "t": "\"The price is 60,000 Baht.\"",
            "th": "\"ราคา 60,000 บาทค่ะ\"",
            "v": "ok",
            "n": "Correct, but mention breakfast is included — it makes the number feel fair.",
            "nTh": "ถูก แต่บอกด้วยว่ารวมอาหารเช้า ทำให้ราคารู้สึกสมเหตุสมผล"
          }, {
            "t": "\"That's expensive but okay.\"",
            "th": "\"แพงอยู่นะคะ แต่ก็โอเค\"",
            "v": "bad",
            "n": "Never call our own rate expensive. State the price with confidence and its value.",
            "nTh": "ห้ามพูดว่าราคาของเราแพง แจ้งราคาอย่างมั่นใจพร้อมความคุ้มค่า"
          }]
        }, {
          "type": "choice",
          "scene": "The guest agrees to extend and pays. You need to update their key card.",
          "sceneTh": "แขกตกลงพักต่อและชำระเงินแล้ว คุณต้องอัปเดตคีย์การ์ด",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Here is your receipt. Let me update your room card, and I'll extend it until your new check-out date.\"",
            "th": "\"นี่ใบเสร็จของคุณค่ะ ขออัปเดตคีย์การ์ดให้ และจะต่ออายุจนถึงวันเช็คเอาท์ใหม่นะคะ\"",
            "v": "best",
            "n": "Receipt, then update the card and say what you did. The guest leaves knowing everything is sorted.",
            "nTh": "ให้ใบเสร็จ แล้วอัปเดตการ์ดและบอกสิ่งที่ทำ แขกจากไปโดยรู้ว่าทุกอย่างเรียบร้อย"
          }, {
            "t": "Take the card, update it, and hand it back silently.",
            "th": "รับการ์ด อัปเดต แล้วยื่นคืนโดยไม่พูดอะไร",
            "v": "ok",
            "n": "It works, but tell them what you did and give the receipt — silence leaves them unsure.",
            "nTh": "ใช้ได้ แต่บอกสิ่งที่ทำและให้ใบเสร็จ ความเงียบทำให้แขกไม่แน่ใจ"
          }, {
            "t": "\"Your old card won't work anymore, figure it out.\"",
            "th": "\"การ์ดเดิมใช้ไม่ได้แล้วนะคะ ไปจัดการเอาเอง\"",
            "v": "bad",
            "n": "Never leave a guest to 'figure it out'. Update it for them and confirm it works.",
            "nTh": "ห้ามปล่อยให้แขก 'จัดการเอง' อัปเดตให้และยืนยันว่าใช้งานได้"
          }, {
            "t": "\"No receipt, we don't do those.\"",
            "th": "\"ไม่มีใบเสร็จค่ะ เราไม่ทำ\"",
            "v": "bad",
            "n": "Always give a receipt for a payment. It is the guest's proof and their right.",
            "nTh": "ให้ใบเสร็จสำหรับการชำระเงินเสมอ เป็นหลักฐานและสิทธิ์ของแขก"
          }]
        }, {
          "type": "guest",
          "scene": "A guest asks to move to a better room.",
          "sceneTh": "แขกขอย้ายไปห้องที่ดีกว่า",
          "guest": {
            "en": "Is it possible to upgrade to the Seaview Pool Suite?",
            "th": "อัปเกรดเป็นซีวิวพูลสวีทได้ไหม"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"Allow me to check availability. If the Seaview Pool Suite is taken, may I suggest another category for you?\"",
            "th": "\"ขออนุญาตตรวจสอบห้องว่างนะคะ หากซีวิวพูลสวีทถูกจองแล้ว ขอแนะนำห้องประเภทอื่นให้ได้ไหมคะ\"",
            "v": "best",
            "n": "Check first, and have a backup ready. Offering an alternative keeps a 'no' from being the end.",
            "nTh": "ตรวจสอบก่อน และเตรียมทางเลือกสำรอง การเสนอห้องอื่นทำให้ 'ไม่ว่าง' ไม่ใช่จุดจบ"
          }, {
            "t": "\"That room is always full, forget it.\"",
            "th": "\"ห้องนั้นเต็มตลอดค่ะ ลืมไปได้เลย\"",
            "v": "bad",
            "n": "Dismissive and unhelpful. Check, and offer an alternative if it's taken.",
            "nTh": "ปัดตกและไม่ช่วยอะไร ตรวจสอบ และเสนอทางเลือกหากเต็ม"
          }, {
            "t": "\"Sure, no problem!\" (before checking)\"",
            "th": "\"ได้เลยค่ะ ไม่มีปัญหา!\" (ก่อนตรวจสอบ)",
            "v": "bad",
            "n": "Never promise before you check. A promise you can't keep is worse than a delay.",
            "nTh": "ห้ามสัญญาก่อนตรวจสอบ สัญญาที่รักษาไม่ได้แย่กว่าการรอ"
          }, {
            "t": "\"Let me check for you.\"",
            "th": "\"ขอตรวจสอบให้นะคะ\"",
            "v": "ok",
            "n": "Right first step, but line up an alternative so you're ready if it's unavailable.",
            "nTh": "เริ่มถูก แต่เตรียมทางเลือกไว้เผื่อห้องไม่ว่าง"
          }]
        }]
      }, {
        "id": "roomproblems",
        "name": {
          "en": "In-Room Problems",
          "th": "ปัญหาในห้องพัก"
        },
        "questions": [{
          "type": "guest",
          "scene": "A guest calls the desk, upset about their room.",
          "sceneTh": "แขกโทรมาที่เคาน์เตอร์ ไม่พอใจเรื่องห้องพัก",
          "guest": {
            "en": "The room wasn't cleaned properly. There's dust everywhere.",
            "th": "ห้องทำความสะอาดไม่เรียบร้อย มีฝุ่นเต็มไปหมด"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I sincerely apologize for the inconvenience. I'll bring our housekeeping team to your room very shortly to put it right.\"",
            "th": "\"ต้องขออภัยอย่างยิ่งในความไม่สะดวกค่ะ ดิฉันจะพาทีมแม่บ้านไปที่ห้องของคุณโดยเร็วเพื่อแก้ไขให้เรียบร้อย\"",
            "v": "best",
            "n": "Apologise sincerely and act at once, with a real team and a real time. Own it fully.",
            "nTh": "ขออภัยอย่างจริงใจและลงมือทันที พร้อมทีมจริงและเวลาจริง รับผิดชอบเต็มที่"
          }, {
            "t": "\"Housekeeping is not my department.\"",
            "th": "\"งานแม่บ้านไม่ใช่แผนกของดิฉันค่ะ\"",
            "v": "bad",
            "n": "'Not my department' is a phrase we never say. To the guest, you are the resort. Fix it.",
            "nTh": "'ไม่ใช่แผนกของดิฉัน' คือคำที่เราไม่พูด สำหรับแขกคุณคือรีสอร์ท จัดการให้"
          }, {
            "t": "\"I'm sorry. I'll tell someone.\"",
            "th": "\"ขอโทษค่ะ เดี๋ยวจะบอกใครสักคน\"",
            "v": "ok",
            "n": "The apology is right, but 'someone' and no time sounds vague. Name the team and a time.",
            "nTh": "ขอโทษถูก แต่ 'ใครสักคน' โดยไม่มีเวลาฟังดูคลุมเครือ ระบุทีมและเวลา"
          }, {
            "t": "\"Are you sure? It was cleaned this morning.\"",
            "th": "\"แน่ใจนะคะ เพิ่งทำความสะอาดเมื่อเช้า\"",
            "v": "bad",
            "n": "Never argue with the guest about their own room. Apologise and fix it.",
            "nTh": "ห้ามเถียงกับแขกเรื่องห้องของเขาเอง ขอโทษและแก้ไข"
          }]
        }, {
          "type": "guest",
          "scene": "A guest reports a maintenance fault.",
          "sceneTh": "แขกแจ้งปัญหาการซ่อมบำรุง",
          "guest": {
            "en": "The air-conditioner isn't getting cold.",
            "th": "แอร์ไม่เย็นเลย"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I'm so sorry. Our technician will check the refrigerant and the temperature and fix it promptly for you.\"",
            "th": "\"ต้องขอโทษด้วยค่ะ ช่างเทคนิคของเราจะตรวจสอบสารทำความเย็นและอุณหภูมิ แล้วแก้ไขให้ทันทีค่ะ\"",
            "v": "best",
            "n": "Apologise, then give a clear, confident action. The guest hears that it will be handled.",
            "nTh": "ขอโทษ แล้วบอกการแก้ไขที่ชัดเจนและมั่นใจ แขกได้ยินว่าเรื่องจะถูกจัดการ"
          }, {
            "t": "\"Old air-conditioners are like that.\"",
            "th": "\"แอร์เก่ามันเป็นแบบนี้แหละค่ะ\"",
            "v": "bad",
            "n": "Never excuse a fault or run down our equipment. Send the technician and fix it.",
            "nTh": "ห้ามแก้ตัวให้อาการเสียหรือพูดถึงอุปกรณ์ของเราในแง่ลบ ส่งช่างไปแก้ไข"
          }, {
            "t": "\"I'll send someone.\"",
            "th": "\"เดี๋ยวส่งคนไปให้ค่ะ\"",
            "v": "ok",
            "n": "Fine, but add the apology and a little confidence that it will be sorted.",
            "nTh": "ก็ได้ แต่เพิ่มคำขอโทษและความมั่นใจว่าจะแก้ไขให้"
          }, {
            "t": "\"Just open the window for now.\"",
            "th": "\"เปิดหน้าต่างไปก่อนนะคะ\"",
            "v": "bad",
            "n": "Never make the guest work around our fault. Send the technician.",
            "nTh": "ห้ามให้แขกทนกับอาการเสียของเรา ส่งช่างไป"
          }]
        }, {
          "type": "guest",
          "scene": "The problem in the room is serious and cannot be fixed today.",
          "sceneTh": "ปัญหาในห้องรุนแรงและไม่สามารถซ่อมได้ในวันนี้",
          "guest": {
            "en": "So am I supposed to sleep in a hot room tonight?",
            "th": "แล้วคืนนี้ให้ฉันนอนในห้องที่ร้อนอย่างนั้นเหรอ"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I'm truly sorry. The air-conditioner can't be fixed today, so allow me to arrange another room for you right now.\"",
            "th": "\"ต้องขอโทษจริง ๆ ค่ะ วันนี้ซ่อมแอร์ไม่ได้ ดิฉันขออนุญาตจัดห้องใหม่ให้คุณเดี๋ยวนี้เลยนะคะ\"",
            "v": "best",
            "n": "When it can't be fixed, move the guest — now. A comfortable night matters more than the repair.",
            "nTh": "เมื่อซ่อมไม่ได้ ให้ย้ายห้องแขกทันที คืนที่สบายสำคัญกว่าการซ่อม"
          }, {
            "t": "\"Sorry, nothing I can do tonight.\"",
            "th": "\"ขอโทษค่ะ คืนนี้ทำอะไรไม่ได้เลย\"",
            "v": "bad",
            "n": "There is always something: move them. Never leave a guest in an unusable room.",
            "nTh": "มีสิ่งที่ทำได้เสมอ คือย้ายห้อง ห้ามปล่อยแขกไว้ในห้องที่ใช้ไม่ได้"
          }, {
            "t": "\"Our engineering will take a long time. Would you like me to find a new room?\"",
            "th": "\"ฝ่ายช่างจะใช้เวลานานค่ะ ต้องการให้ดิฉันหาห้องใหม่ให้ไหมคะ\"",
            "v": "ok",
            "n": "Right direction, but don't make a distressed guest decide. Offer the new room and lead.",
            "nTh": "ทิศทางถูก แต่อย่าให้แขกที่ไม่สบายใจเป็นคนตัดสินใจ เสนอห้องใหม่และนำทาง"
          }, {
            "t": "\"You can have a fan.\"",
            "th": "\"เอาพัดลมไปใช้ก็ได้ค่ะ\"",
            "v": "bad",
            "n": "A fan is not a fix for a hot suite. Move the guest to a working room.",
            "nTh": "พัดลมไม่ใช่การแก้ปัญหาห้องสวีทที่ร้อน ย้ายแขกไปห้องที่ใช้งานได้"
          }]
        }, {
          "type": "guest",
          "scene": "A guest calls, alarmed, about something in the room.",
          "sceneTh": "แขกโทรมาด้วยความตกใจเรื่องบางอย่างในห้อง",
          "guest": {
            "en": "There's a lizard on the wall! Please get it out.",
            "th": "มีจิ้งจกอยู่บนผนัง! ช่วยเอาออกไปที"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I'm sorry for the fright. Our housekeeping will come and remove it right away, and we'll check the balcony door to keep it from happening again.\"",
            "th": "\"ขอโทษที่ทำให้ตกใจค่ะ แม่บ้านของเราจะไปนำออกให้ทันที และจะตรวจประตูระเบียงเพื่อไม่ให้เกิดขึ้นอีก\"",
            "v": "best",
            "n": "Acknowledge the fright, remove it now, and prevent a repeat. Calm, quick, caring.",
            "nTh": "รับรู้ความตกใจ นำออกทันที และป้องกันไม่ให้เกิดซ้ำ ใจเย็น รวดเร็ว ใส่ใจ"
          }, {
            "t": "\"It's just a lizard, it's harmless.\"",
            "th": "\"แค่จิ้งจกเองค่ะ ไม่มีอันตราย\"",
            "v": "bad",
            "n": "True, but it dismisses the guest's feeling. Reassure by acting, not by minimising.",
            "nTh": "จริง แต่เป็นการปัดความรู้สึกของแขก ทำให้สบายใจด้วยการลงมือ ไม่ใช่การลดทอน"
          }, {
            "t": "\"Try to catch it yourself.\"",
            "th": "\"ลองจับเองดูไหมคะ\"",
            "v": "bad",
            "n": "Never make the guest deal with it. Send housekeeping at once.",
            "nTh": "ห้ามให้แขกจัดการเอง ส่งแม่บ้านไปทันที"
          }, {
            "t": "\"Housekeeping will come and remove it.\"",
            "th": "\"แม่บ้านจะไปนำออกให้ค่ะ\"",
            "v": "ok",
            "n": "Good action, but add a word of reassurance for the fright first.",
            "nTh": "ลงมือดี แต่เพิ่มคำปลอบใจสำหรับความตกใจก่อน"
          }]
        }, {
          "type": "guest",
          "scene": "A guest complains about noise late at night.",
          "sceneTh": "แขกร้องเรียนเรื่องเสียงดังตอนดึก",
          "guest": {
            "en": "The people next door are really loud. We can't sleep.",
            "th": "ห้องข้าง ๆ เสียงดังมาก เรานอนไม่ได้เลย"
          },
          "ask": "What do you do?",
          "askTh": "คุณจะทำอย่างไร",
          "options": [{
            "t": "\"I apologize for the disturbance. I'll speak with them right away and ask them to lower the noise so you can rest.\"",
            "th": "\"ขออภัยในความไม่สะดวกค่ะ ดิฉันจะไปแจ้งห้องนั้นทันทีให้ลดเสียงลง เพื่อให้คุณได้พักผ่อน\"",
            "v": "best",
            "n": "Apologise and act quietly and firmly. The guest just wants quiet, tonight.",
            "nTh": "ขอโทษและจัดการอย่างสุภาพแต่หนักแน่น แขกแค่อยากได้ความเงียบในคืนนี้"
          }, {
            "t": "\"There's nothing I can do about other guests.\"",
            "th": "\"เรื่องแขกคนอื่น ดิฉันทำอะไรไม่ได้ค่ะ\"",
            "v": "bad",
            "n": "You can, and must: speak to the room politely and settle it.",
            "nTh": "คุณทำได้และต้องทำ ไปแจ้งห้องนั้นอย่างสุภาพและจัดการให้เรียบร้อย"
          }, {
            "t": "\"Just call them yourself.\"",
            "th": "\"โทรไปบอกเขาเองสิคะ\"",
            "v": "bad",
            "n": "Never make one guest confront another. That is our job.",
            "nTh": "ห้ามให้แขกไปเผชิญหน้ากับแขกอีกคน นั่นคืองานของเรา"
          }, {
            "t": "\"I'll look into it.\"",
            "th": "\"เดี๋ยวดูให้ค่ะ\"",
            "v": "ok",
            "n": "Too vague for someone who can't sleep. Say you'll speak to them now.",
            "nTh": "คลุมเครือเกินไปสำหรับคนที่นอนไม่ได้ บอกว่าจะไปแจ้งเดี๋ยวนี้"
          }]
        }]
      }, {
        "id": "transport",
        "name": {
          "en": "Getting Around & Breakfast Box",
          "th": "การเดินทางและอาหารเช้าแบบกล่อง"
        },
        "questions": [{
          "type": "guest",
          "scene": "A guest wants to arrange a car to the airport for their departure.",
          "sceneTh": "แขกต้องการจัดรถไปสนามบินสำหรับวันเดินทางกลับ",
          "guest": {
            "en": "We fly out tomorrow. Can you arrange a car to the airport?",
            "th": "พรุ่งนี้เราบินกลับ ช่วยจัดรถไปสนามบินได้ไหม"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Of course. May I have your flight number, and how many people and bags, so I arrange the right car?\"",
            "th": "\"ได้เลยค่ะ ขอทราบหมายเลขเที่ยวบิน จำนวนผู้โดยสาร และกระเป๋า เพื่อจัดรถให้เหมาะสมนะคะ\"",
            "v": "best",
            "n": "Say yes, then gather exactly what you need — flight, people, bags — to book the right vehicle.",
            "nTh": "ตอบรับ แล้วถามสิ่งที่ต้องใช้ให้ครบ เที่ยวบิน จำนวนคน กระเป๋า เพื่อจัดรถให้ถูก"
          }, {
            "t": "\"Yes. What time?\"",
            "th": "\"ได้ค่ะ กี่โมงคะ\"",
            "v": "ok",
            "n": "A start, but you'll need the flight number and party size too. Ask for all of it once.",
            "nTh": "เริ่มได้ แต่ต้องใช้หมายเลขเที่ยวบินและจำนวนคนด้วย ถามให้ครบในครั้งเดียว"
          }, {
            "t": "\"Take a taxi outside.\"",
            "th": "\"ไปเรียกแท็กซี่ข้างนอกเอาค่ะ\"",
            "v": "bad",
            "n": "We arrange transport for our guests. Never send them out to fend for themselves.",
            "nTh": "เราจัดรถให้แขก ห้ามไล่แขกออกไปจัดการเอง"
          }, {
            "t": "\"I'm not sure we do that.\"",
            "th": "\"ไม่แน่ใจว่าเราทำให้ได้ไหมค่ะ\"",
            "v": "bad",
            "n": "We do. Never sound unsure about a service we offer — arrange it with confidence.",
            "nTh": "เราทำได้ ห้ามฟังดูไม่มั่นใจในบริการของเรา จัดการอย่างมั่นใจ"
          }]
        }, {
          "type": "choice",
          "scene": "You are advising the guest what time to leave for a smooth departure.",
          "sceneTh": "คุณกำลังแนะนำเวลาที่แขกควรออกเดินทางเพื่อไปสนามบินอย่างราบรื่น",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"I'd recommend leaving 4 hours before your flight — the drive is about an hour, and 3 hours is ideal for airport check-in.\"",
            "th": "\"ขอแนะนำให้ออกก่อนเที่ยวบิน 4 ชั่วโมงค่ะ เดินทางประมาณ 1 ชั่วโมง และเผื่อ 3 ชั่วโมงสำหรับเช็คอินที่สนามบิน\"",
            "v": "best",
            "n": "Give the recommendation and the reasoning. The guest trusts advice that explains itself.",
            "nTh": "ให้คำแนะนำพร้อมเหตุผล แขกเชื่อคำแนะนำที่อธิบายที่มา"
          }, {
            "t": "\"Leave early.\"",
            "th": "\"ออกแต่เช้านะคะ\"",
            "v": "ok",
            "n": "Too vague to plan around. Give the actual hours and why.",
            "nTh": "คลุมเครือเกินกว่าจะวางแผน ให้จำนวนชั่วโมงจริงและเหตุผล"
          }, {
            "t": "\"You'll probably make it.\"",
            "th": "\"น่าจะทันค่ะ\"",
            "v": "bad",
            "n": "Never leave a flight to chance. Give a clear, safe departure time.",
            "nTh": "ห้ามปล่อยเรื่องเที่ยวบินให้เสี่ยง ให้เวลาออกเดินทางที่ชัดเจนและปลอดภัย"
          }, {
            "t": "\"That's up to you.\"",
            "th": "\"แล้วแต่คุณเลยค่ะ\"",
            "v": "bad",
            "n": "The guest is asking for your expertise. Give a real recommendation.",
            "nTh": "แขกกำลังขอความเชี่ยวชาญจากคุณ ให้คำแนะนำที่ชัดเจน"
          }]
        }, {
          "type": "choice",
          "scene": "The car is booked. You explain the VIP van fare and how it's paid.",
          "sceneTh": "จองรถแล้ว คุณอธิบายค่ารถตู้วีไอพีและวิธีชำระ",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"The VIP private van is 2,500 Baht. We'll charge it to your room, and you can settle it at check-out.\"",
            "th": "\"รถตู้วีไอพีส่วนตัวราคา 2,500 บาทค่ะ เราจะเซ็นเข้าห้องให้ และชำระตอนเช็คเอาท์ได้เลยค่ะ\"",
            "v": "best",
            "n": "State the fare and make paying effortless — charge to the room, settle at check-out.",
            "nTh": "แจ้งราคาและทำให้การจ่ายง่าย เซ็นเข้าห้อง ชำระตอนเช็คเอาท์"
          }, {
            "t": "\"2,500 Baht, pay me now in cash.\"",
            "th": "\"2,500 บาทค่ะ จ่ายสดกับดิฉันเดี๋ยวนี้เลย\"",
            "v": "bad",
            "n": "Don't demand cash up front. Charge to the room like everything else.",
            "nTh": "อย่าเรียกเงินสดล่วงหน้า เซ็นเข้าห้องเหมือนทุกอย่าง"
          }, {
            "t": "\"It's 2,500 Baht.\"",
            "th": "\"2,500 บาทค่ะ\"",
            "v": "ok",
            "n": "Correct, but add that it goes on the room bill so there's no fuss now.",
            "nTh": "ถูก แต่บอกด้วยว่าเซ็นเข้าห้อง จะได้ไม่ต้องยุ่งยากตอนนี้"
          }, {
            "t": "\"I don't know the price.\"",
            "th": "\"ไม่ทราบราคาค่ะ\"",
            "v": "bad",
            "n": "Know your service's prices. Guessing or not knowing erodes trust.",
            "nTh": "ต้องรู้ราคาบริการของตัวเอง การเดาหรือไม่รู้ทำให้เสียความเชื่อใจ"
          }]
        }, {
          "type": "guest",
          "scene": "A guest leaving before breakfast asks about a breakfast box.",
          "sceneTh": "แขกที่ออกเดินทางก่อนเวลาอาหารเช้าถามเรื่องอาหารเช้าแบบกล่อง",
          "guest": {
            "en": "We leave at 5 a.m. Can we still get breakfast?",
            "th": "เราออกตีห้า ยังได้อาหารเช้าไหม"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Of course. How many breakfast boxes would you like, and is anyone allergic to any foods? You can pick them up at the lobby.\"",
            "th": "\"ได้ค่ะ ต้องการอาหารเช้าแบบกล่องกี่กล่องคะ และมีใครแพ้อาหารอะไรไหมคะ รับได้ที่ล็อบบี้ค่ะ\"",
            "v": "best",
            "n": "Yes, then the three things you need: how many, allergies, and where to collect them.",
            "nTh": "ตอบรับ แล้วถามสามสิ่งที่ต้องรู้ กี่กล่อง แพ้อะไรไหม และรับที่ไหน"
          }, {
            "t": "\"No, breakfast is only from 7 a.m.\"",
            "th": "\"ไม่ได้ค่ะ อาหารเช้าเริ่มเจ็ดโมง\"",
            "v": "bad",
            "n": "We solve this with a breakfast box. Never let an early departure mean no breakfast.",
            "nTh": "เราแก้ด้วยอาหารเช้าแบบกล่อง อย่าให้การออกเดินทางเช้าหมายถึงไม่ได้อาหารเช้า"
          }, {
            "t": "\"How many boxes would you like?\"",
            "th": "\"รับกี่กล่องคะ\"",
            "v": "ok",
            "n": "Good start — but also ask about allergies and tell them where to collect.",
            "nTh": "เริ่มดี แต่ถามเรื่องการแพ้อาหารและบอกจุดรับด้วย"
          }, {
            "t": "\"Just take some fruit from the lobby.\"",
            "th": "\"หยิบผลไม้ที่ล็อบบี้ไปก็ได้ค่ะ\"",
            "v": "bad",
            "n": "That's not the service. Offer the proper breakfast box.",
            "nTh": "นั่นไม่ใช่บริการของเรา เสนออาหารเช้าแบบกล่องที่ถูกต้อง"
          }]
        }]
      }, {
        "id": "checkout",
        "name": {
          "en": "Check-Out & Farewell",
          "th": "เช็คเอาท์และการอำลา"
        },
        "questions": [{
          "type": "choice",
          "scene": "A guest arrives at the desk to check out. Their bags are still in the room.",
          "sceneTh": "แขกมาที่เคาน์เตอร์เพื่อเช็คเอาท์ กระเป๋ายังอยู่ในห้อง",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Are you ready to check out? Our bellboy will collect your luggage shortly. May I have your key card?\"",
            "th": "\"พร้อมเช็คเอาท์ไหมคะ พนักงานยกกระเป๋าจะไปรับสัมภาระให้เร็ว ๆ นี้ ขอคีย์การ์ดด้วยค่ะ\"",
            "v": "best",
            "n": "Confirm, arrange the bags, and take the card — the three things check-out needs, in order.",
            "nTh": "ยืนยัน จัดการกระเป๋า และรับการ์ด สามสิ่งที่การเช็คเอาท์ต้องทำ เรียงตามลำดับ"
          }, {
            "t": "\"Key card. Now.\"",
            "th": "\"คีย์การ์ดค่ะ เดี๋ยวนี้\"",
            "v": "bad",
            "n": "Curt and demanding. Ask politely and offer to handle the luggage.",
            "nTh": "ห้วนและออกคำสั่ง ขออย่างสุภาพและเสนอช่วยเรื่องกระเป๋า"
          }, {
            "t": "\"Carry your own bags down, please.\"",
            "th": "\"ช่วยถือกระเป๋าลงมาเองนะคะ\"",
            "v": "bad",
            "n": "We collect the luggage for the guest. Never send them to carry it themselves.",
            "nTh": "เรารับกระเป๋าให้แขก ห้ามให้แขกถือเอง"
          }, {
            "t": "\"Ready to check out?\"",
            "th": "\"พร้อมเช็คเอาท์ไหมคะ\"",
            "v": "ok",
            "n": "Good opener, but continue — offer the bellboy and ask for the card.",
            "nTh": "เปิดดี แต่ทำต่อ เสนอพนักงานยกกระเป๋าและขอการ์ด"
          }]
        }, {
          "type": "choice",
          "scene": "Before you print the bill, you need to check the room account is complete.",
          "sceneTh": "ก่อนพิมพ์บิล คุณต้องตรวจสอบว่าบัญชีห้องพักครบถ้วน",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Have you used anything from the minibar? And kindly check the safety box is empty before you leave.\"",
            "th": "\"ได้ใช้อะไรจากมินิบาร์ไหมคะ และรบกวนตรวจว่าเซฟว่างเปล่าก่อนออกนะคะ\"",
            "v": "best",
            "n": "Ask about the minibar and remind them about the safe — it saves the guest a lost passport and a wrong bill.",
            "nTh": "ถามเรื่องมินิบาร์และเตือนเรื่องเซฟ ช่วยไม่ให้แขกลืมพาสปอร์ตและไม่ให้บิลผิด"
          }, {
            "t": "\"You didn't take anything from the minibar, right?\"",
            "th": "\"ไม่ได้หยิบอะไรจากมินิบาร์ใช่ไหมคะ\"",
            "v": "ok",
            "n": "A leading question can make a guest feel accused. Ask it neutrally.",
            "nTh": "คำถามชี้นำอาจทำให้แขกรู้สึกถูกกล่าวหา ถามอย่างเป็นกลาง"
          }, {
            "t": "\"We'll just charge you for the minibar anyway.\"",
            "th": "\"เดี๋ยวคิดค่ามินิบาร์ไปเลยแล้วกันค่ะ\"",
            "v": "bad",
            "n": "Never charge without checking. Ask, verify, then bill only what was used.",
            "nTh": "ห้ามคิดเงินโดยไม่ตรวจสอบ ถาม ตรวจ แล้วคิดเฉพาะที่ใช้จริง"
          }, {
            "t": "\"Forget the safe, just go.\"",
            "th": "\"ไม่ต้องสนใจเซฟหรอกค่ะ ไปได้เลย\"",
            "v": "bad",
            "n": "Always remind them about the safe — a forgotten passport is a ruined trip.",
            "nTh": "เตือนเรื่องเซฟเสมอ พาสปอร์ตที่ลืมไว้ทำให้ทริปพัง"
          }]
        }, {
          "type": "choice",
          "scene": "You present the folio. You want the guest to trust the charges.",
          "sceneTh": "คุณยื่นใบสรุปค่าใช้จ่าย คุณอยากให้แขกมั่นใจในรายการ",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"This is the summary of your charges. Please double-check it, and if anything looks wrong, do let me know.\"",
            "th": "\"นี่คือสรุปค่าใช้จ่ายของคุณค่ะ รบกวนตรวจสอบอีกครั้ง หากพบสิ่งใดไม่ถูกต้อง แจ้งดิฉันได้เลยนะคะ\"",
            "v": "best",
            "n": "Invite them to check and to speak up. Openness about the bill builds trust at the last moment.",
            "nTh": "เชิญให้แขกตรวจและทักท้วงได้ ความโปร่งใสเรื่องบิลสร้างความเชื่อใจในนาทีสุดท้าย"
          }, {
            "t": "\"Here's your bill. It's all correct.\"",
            "th": "\"นี่บิลค่ะ ถูกต้องหมดแล้ว\"",
            "v": "ok",
            "n": "Probably true, but inviting them to check themselves feels more honest and open.",
            "nTh": "อาจจะจริง แต่การเชิญให้แขกตรวจเองรู้สึกซื่อตรงและเปิดกว่า"
          }, {
            "t": "\"Just pay, it's fine.\"",
            "th": "\"จ่ายเลยค่ะ ไม่มีอะไรหรอก\"",
            "v": "bad",
            "n": "Never rush a guest past their own bill. Invite them to check it.",
            "nTh": "ห้ามเร่งแขกให้ข้ามบิลของตัวเอง เชิญให้ตรวจสอบ"
          }, {
            "t": "\"If it's wrong, that's not my fault.\"",
            "th": "\"ถ้าผิดก็ไม่ใช่ความผิดดิฉันนะคะ\"",
            "v": "bad",
            "n": "Never get defensive about the bill. Offer to check and fix anything together.",
            "nTh": "ห้ามตั้งท่าป้องกันตัวเรื่องบิล เสนอตรวจและแก้ไขด้วยกัน"
          }]
        }, {
          "type": "choice",
          "scene": "The guest is ready to pay and asks about currency.",
          "sceneTh": "แขกพร้อมชำระเงินและถามเรื่องสกุลเงิน",
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"Would you like to settle in cash or by card? And in Thai Baht or your home currency — we'd recommend your home currency.\"",
            "th": "\"ต้องการชำระเป็นเงินสดหรือบัตรดีคะ และเป็นเงินบาทหรือสกุลเงินประเทศของคุณ ซึ่งเราแนะนำสกุลเงินประเทศของคุณค่ะ\"",
            "v": "best",
            "n": "Offer both, then give a helpful recommendation. Guiding the choice is service, not pressure.",
            "nTh": "เสนอทั้งสองแบบ แล้วให้คำแนะนำที่เป็นประโยชน์ การช่วยเลือกคือบริการ ไม่ใช่การกดดัน"
          }, {
            "t": "\"Cash only, Baht only.\"",
            "th": "\"รับแต่เงินสด แต่เงินบาทเท่านั้นค่ะ\"",
            "v": "bad",
            "n": "We accept cards and other currencies. Never limit the guest's options falsely.",
            "nTh": "เรารับบัตรและสกุลเงินอื่น ห้ามจำกัดทางเลือกของแขกโดยไม่จริง"
          }, {
            "t": "\"Cash or card?\"",
            "th": "\"เงินสดหรือบัตรคะ\"",
            "v": "ok",
            "n": "Good, but also cover the currency question and your recommendation.",
            "nTh": "ดี แต่ถามเรื่องสกุลเงินและให้คำแนะนำด้วย"
          }, {
            "t": "\"Pay however, I don't mind.\"",
            "th": "\"จ่ายแบบไหนก็ได้ค่ะ ไม่ว่ากัน\"",
            "v": "ok",
            "n": "Relaxed, but the guest wants guidance. Offer the options and a recommendation.",
            "nTh": "สบาย ๆ ดี แต่แขกอยากได้คำแนะนำ เสนอทางเลือกและคำแนะนำ"
          }]
        }, {
          "type": "guest",
          "scene": "Everything is settled. The guest is about to leave for the airport.",
          "sceneTh": "ทุกอย่างเรียบร้อย แขกกำลังจะออกเดินทางไปสนามบิน",
          "guest": {
            "en": "Thank you, we had a wonderful stay.",
            "th": "ขอบคุณนะ เราพักที่นี่ได้อย่างมีความสุขมาก"
          },
          "ask": "What do you say?",
          "askTh": "คุณจะพูดอย่างไร",
          "options": [{
            "t": "\"It was our pleasure. Thank you for choosing to stay with us — have a safe and pleasant flight home, and we look forward to welcoming you again.\"",
            "th": "\"ด้วยความยินดีค่ะ ขอบคุณที่เลือกพักกับเรา ขอให้เดินทางกลับบ้านโดยสวัสดิภาพ และหวังว่าจะได้ต้อนรับอีกครั้งนะคะ\"",
            "v": "best",
            "n": "'It was our pleasure', thanks, a safe-flight wish, and an invitation back. The farewell they'll remember.",
            "nTh": "'ด้วยความยินดี' ขอบคุณ อวยพรเดินทางปลอดภัย และเชิญกลับมาอีก การอำลาที่แขกจะจดจำ"
          }, {
            "t": "\"Thank you. Bye.\"",
            "th": "\"ขอบคุณค่ะ บายค่ะ\"",
            "v": "ok",
            "n": "Polite but small. This is the last moment — make it warm and complete.",
            "nTh": "สุภาพแต่เรียบ นี่คือช่วงเวลาสุดท้าย ทำให้อบอุ่นและครบถ้วน"
          }, {
            "t": "\"If you liked it, please leave us a review online.\"",
            "th": "\"ถ้าชอบ รบกวนรีวิวให้เราออนไลน์ด้วยนะคะ\"",
            "v": "ok",
            "n": "Asking for a review is fine, but lead with the farewell — the request comes after the warmth.",
            "nTh": "ขอรีวิวได้ แต่เริ่มด้วยการอำลาก่อน คำขอมาหลังความอบอุ่น"
          }, {
            "t": "\"Okay, next guest please.\"",
            "th": "\"ค่ะ แขกคนต่อไปค่ะ\"",
            "v": "bad",
            "n": "Never rush a guest out the door. The last words should be for them.",
            "nTh": "ห้ามเร่งแขกออกไป คำพูดสุดท้ายควรเป็นของแขก"
          }]
        }]
      }]
    }
  }
};
const AUDIO_MANIFEST = ["106eo9l1ic2", "106o409uatz", "113zqhnz3rz", "11wl07blf16", "125c9bj7ew0", "12nknuws0d1", "138368ak50", "139hctxweds", "13ci1fn77yu", "13oxtrc20wh", "13vlw6ioqm", "13w7n81hv6t", "14662p4o3uk", "147sbl8jc1z", "14g6w0f6q69", "14iiv6kyhkm", "14jwknbaw4l", "14mlwj22dsq", "154dnpi8vrk", "15iim6ydguj", "15x90bx7kx3", "15z01mhl235", "16g2qjjcrf4", "16qi81bxdyv", "16r5zgfgovr", "17777y2mlzq", "179ktta6gys", "17h1ajcl90e", "17pyyf3wn3l", "189e2qobnbm", "18azch7i6t9", "18hrdovnek", "18jjwppdnlt", "18n7ymvppdm", "18wkkf1byt4", "1983hatgvo6", "19fwnyr3sqq", "19ielgvsx8", "19meas6h3gx", "19p94qspyn5", "19suh1fhmac", "19u47mbnkrx", "19yew8bj2sj", "1a7hrztsy9q", "1a8h02825bd", "1afonlzhila", "1bg9a2pwj9l", "1by1u4jatgu", "1bzoep8adxb", "1c1ut7jqku9", "1ch5zpr5ugy", "1cpwl5qwj5n", "1curkz8lf4w", "1cxg8ewdz0e", "1cxi67twonf", "1d0rko7kbhv", "1d3cysyy7bo", "1d93ixg43mx", "1ddy14rk1p9", "1e370z76lt0", "1e5jh231rrx", "1e8l2guwvrp", "1ebn20sxbsr", "1ehmqzolyxc", "1ekur8kt8gy", "1epp3iqfbpl", "1etv630cig0", "1ety9k65puy", "1euqefgnzzd", "1eyhk8kmkwq", "1f0iwhwc7x0", "1f1i9ypn5od", "1fif898n549", "1fkxohdoynt", "1fpj2lnxqyp", "1frx2g1fo4q", "1ftgr2qrc2k", "1fuqb360qos", "1fv1zy6x4g7", "1g5fazc28ji", "1g8zpagx1i6", "1gb9juxaro5", "1gbqzqfgy6d", "1gh7gl2gccb", "1h5m08jsqxq", "1h8bes4gfv9", "1hplatg07cg", "1hxp6kqc63m", "1iabkvdv4jx", "1ic85hn5n68", "1irsl9k5ljs", "1iv8fh8f29m", "1j4fz9zq6z3", "1j6a0frxl42", "1j736dsk1nb", "1jbwiayp209", "1jhcgh0cxyy", "1jjsgi8bsaq", "1jper6m5ga8", "1jqcfat8m3s", "1jtmar82vk", "1k1uau773zv", "1k75j3t7exq", "1ka17362nm7", "1kbafxqurjk", "1l0h5qgel9d", "1l41hgn76ef", "1l4q61es8zp", "1l4yjv7aczg", "1l5fq3i42l3", "1la8ezefwp7", "1lkpa1a2e0d", "1lnr2zwbedw", "1m26lvk5xjx", "1m3xb0mglhh", "1m4inmhz0al", "1m518qgtt2d", "1mbuktkivgx", "1mfu1ufcm0c", "1mrzjq3tnh5", "1mtx93t9hb1", "1mx09ht6too", "1n1hnvejk3t", "1n7hopjmkm", "1n7m6jgduet", "1nj5eous4ur", "1nma99tdpuq", "1ntrd0sj1wh", "1osq1kzvtv8", "1p57dkurjrk", "1p94iuhpxwk", "1pgwi363vza", "1pjf40p53as", "1plsutiadhc", "1poemceru2p", "1pqv0tr0wln", "1pyenl61f94", "1q3jvi5kmzy", "1q7drvg6h97", "1qahsx66g72", "1qaqabnmbp0", "1qf8kdwq4lb", "1qf9v5b68bf", "1qgxej9eids", "1qsmga8zrwt", "1qwlvh4fgbi", "1r0fqh2jv9x", "1rax42uy3tp", "1rknigefb28", "1rquissdss8", "1s8jetah9km", "1seokieingw", "1si89s3zkut", "1skjru7oxl7", "1slfb4nao7v", "1svhhzqubr6", "1t2z3xojrhk", "1t6j3vpjoez", "1tcyv9022la", "1tgtwiw6vtt", "1tis6ve6t67", "1tzhgcndago", "1u8hb70yjpz", "1u9rbb0ysp0", "1ubhd9k1oe2", "1ubr84n96ij", "1usep3yrbhz", "1uvatb059o", "1v3v7ivhrwf", "1v42f4bei5", "1v487piiagr", "1v6ue1ioufs", "1vc955meo2", "1vfq3dhfyhg", "1vxtu6e5wcs", "1w0d5ite72z", "1wb4osztpjd", "1wf5s14x3wn", "1wlzdf15qht", "1x046b7w46y", "1x22d95qhgr", "1x3uu4rmk37", "1x4rk01jbfr", "1xdrdh4tc0o", "1xgccxjzcm1", "1xhee4rh2cz", "1xmwy9rhl9a", "1xnbru9nyj2", "1xnof6w08m8", "1xw1fynbagp", "1y372axgp51", "1y759hbcedv", "1y7uxjuuvgj", "1yececpla9n", "1yjij4ebmmm", "1yl9nwqtffx", "1ymo8e8jkt1", "1yqf19llh1i", "1yqo6pjmxsr", "1z7tujz3smm", "1z9tkpb7aq7", "1zadslclri7", "1zk82yo9ht3", "1zq6us7t7ju", "1zqyv32iciv", "2064ntphvbb", "207gj2ya5m", "20aplbm89tg", "20hg4bnb7he", "20lapiunxb3", "2121c70cpka", "217btst3nog", "21h5a53pv5c", "21s08aig3is", "224rx9hupih", "228yqutrmp8", "229yo73d9f5", "22iz80ft19s", "22w6bfd66vg", "22yl500es27", "23lzcbr9gp1", "23yopy3zaq8", "23zpmx8exkw", "24aqm5m6nqb", "24peby68f0l", "24s557ss40p", "251u9vbq6zs", "25bobglylje", "25fkvnx4e71", "25p4n0nnvyy", "25qo3pbs82d", "25vrq1se5xr", "264asj8vvbu", "26e47q9zoc6", "26i189yid9s", "26uq4x4w7lc", "2726mca4c3m", "27hw5paen5x", "27zfb81idf4", "284eh59dbwy", "286crmhzav", "28dnzjzqig0", "28e9iwmnx5f", "28j7fdpyzng", "28mji10j3pp", "28omfcdy9bo", "28xa12pqaqw", "29llp97gvog", "2a3evpalpj1", "2a7afr8cfip", "2a96lqikk18", "2ae13t508sj", "2amw0eehys3", "2ap3dm5kfds", "2avzuvyh0k3", "2ax9wi9rxez", "2axs49y73pc", "2azn1kjng6o", "2b0ozivqn2u", "2b2icqj20pq", "2b72zcfj9nh", "2bbh0ory5eu", "2bgywbzql4s", "2bsghukafmd", "2bvt7tzchde", "2c3snlx5amw", "2cnc5s7m2i1", "2cp75x4ftx0", "2cu5s156e9w", "2cydhpfuwqi", "2cz2f3kcnil", "2d3tn1uh4cy", "2d50jm5d8s8", "2d8lzvlhfpc", "2d9zsc6jhqp", "2dlbu2wb0e", "2e1maicfp3h", "2e9gsyl5hlp", "2edof27isef", "2epyk61y0", "2erumu30tof", "2evps4jxonq", "2ez3mslaqgb", "2f5682ldj22", "2f6nbs08sxo", "2fd0eemz71l", "2ff418zc0xy", "2ffmlckyhyg", "2fkax354ehn", "2fqw4a13wem", "2fszkxos65k", "2fwzwty6vpw", "2g1x992o865", "2g2wk1gyk1u", "2gf70ld0vjz", "2ggx6r7eaqp", "2kpvfzuuo8", "2porajyphz", "2pw85qli3c", "32redl1erl", "35smkhg8n5", "35zef6a6yh", "366ya7fld9", "3bwk8ccypb", "42n781dt6b", "42zdmphpw3", "43tl5brcaa", "4enur57s2d", "4l2ocoigvx", "4lwmcg7f34", "4t6pzscck8", "4u0ilbfwri", "50t6nrgkyn", "59kbkvlim2", "5b9vxz90ad", "5cooqv1y2w", "5g41uoktf6", "5rir00465x", "67a4x5qc6a", "6fvu83zvlq", "6xdm6gpfy0", "6xx1wd51ku", "73v2w86xm7", "75x4d9ayql", "77ip60tmt7", "7c349fqbsn", "7j7tqix7db", "7tc94p1xfp", "7zpb9g6iqt", "8cvdk6ztbm", "8jotmyldph", "8peywowybu", "8snkgda42m", "926lbrztxo", "9h0p1r7lu7", "9pai0mfj8j", "9pd10inzi3", "9spqjdg2rg", "9wjtd81ghv", "ar8hsmcrkw", "aslkyc19eo", "ath9labohg", "avlemq9btb", "aw47bbms2", "awpnv8pw8o", "axzbds52yg", "b21ykqy7la", "b2im4nlofn", "b3u8km9jee", "b6varbz2v5", "b71fchdo5d", "bgobukjjhi", "c1eedde2vr", "c5jv5l9n06", "c6ai6bog8u", "cc528mwp0g", "ccy3lenapq", "cf5fg3gkey", "chv2bs4igb", "ci86l009yc", "clhu9wldsn", "d0h27qnjh6", "d2hquxajpc", "d4nxnozh55", "d5xwrv7w49", "dbloce4f16", "dik0otdiur", "dp1vndhtn1", "ds88zn8ttd", "dv5xg05vhm", "dzcgti9866", "e2x4vyl8cf", "eb1oopzn5d", "ec7mwuf9tw", "edjrjh1fll", "ehlogvvqho", "esw03gt71k", "ez981eml8y", "f17weq4hnx", "f60jx1kbyx", "fcpkn2k921", "ffxue8wrid", "fib7cknv4y", "fpjj90nbwv", "fvuz5ndd98", "g1lu46xfn8", "g4nxl7gv4c", "g4wdv9b18t", "gdgig9exl6", "gkuincshm2", "gquj2qi1rx", "h7j71eh6v4", "h7qz47kvzb", "helfrdfw5l", "hitujkw967", "hpao9g8u5", "i2xoz98dl0", "i5x5027d3z", "ia45592cek", "ixav4rbp88", "j0s7skytvm", "ji39n2e93l", "jk5rizkw9v", "jmkigc8oh4", "jo1z0u91gs", "jy1ovziw22", "jyczu65flo", "k0ozeht5zf", "k13zjbmsl2", "kjg9ekiyjh", "kkaatfwac2", "kstkvlfyog", "ku6a905rrm", "kvwyn2su0g", "l8d2dtu6mh", "lu8cmflrmq", "ly9oppar0i", "m4lne8x3hl", "mh42prm0k7", "mznw6cykcy", "n3s40d7jde", "nfe7yrakw6", "npg1adjllq", "nqulq3pur7", "nyo5y9whpq", "nzgmhi3lqd", "ogob6nj3q2", "oh7cl24ujs", "ot86g5emuo", "p6jrn969k2", "pky2r9yuuk", "po0b54gg7a", "poeizbfwk3", "q6f126twqp", "qchcpqm6kt", "qxd7oef9n7", "qyl16trxpv", "r8niwudveu", "raqv7ia65z", "rc3pnhdkei", "rnnc9zwlyx", "rt0gw6r53u", "rwtn7z3p5y", "s01u11g3iq", "sjnxo0htfl", "swnfav5n9c", "t28k5dtcv7", "t9rp6nieo0", "tapc8wwio1", "tbdj510vnq", "tbdwput00g", "te4vsumtyj", "te8rdem4zs", "tlcp2fmqio", "tp2gc9zgl0", "ucdle0iscz", "uco30jthyp", "ujbmr2tflw", "uk9urgw3y1", "ut5r636x1z", "uvjedb7x5j", "uyjdcl8l8y", "v1g4hbwrc6", "v4nzwy57u3", "v9zbpwkghj", "va4k7c9xxn", "vfhm0inl1n", "vl7x0gidj9", "vp99zdke7o", "vs6jix4pa7", "vy2a7m1qtp", "wcjmwq5yxs", "wi8iclzjlx", "wjomsbj58b", "wqvdzmofxa", "x7gx38zls8", "x9z5f5i8ym", "xe5q0c1tni", "xpfp13zkpw", "xqr6u2bfa2", "yrol2a6dg9", "yroxzv3qvz", "yuameuwi9g", "z60xvbffk", "z637pq5q5x", "ze4rt6lkxa", "zq15bms33m", "zu2ma2qw1r"];

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
  insulin: ["IN-suh-lin", "Stress the first beat.", "เน้นพยางค์แรก"],
  // Front Office / Resort Host vocabulary
  welcome: ["WEL-kum", "W not V — round the lips. Two beats.", "ใช้เสียง W ไม่ใช่ V ห่อริมฝีปาก สองพยางค์"],
  suite: ["sweet", "Say it like 'sweet' — never 'suit'.", "ออกเสียงเหมือน 'สวีท' ไม่ใช่ 'สูท'"],
  receipt: ["ree-SEET", "The P is silent. Ends with a hard T.", "ตัว P ไม่ออกเสียง ท้ายคำออก T ชัด"],
  towel: ["TOW-uhl", "Two beats. Finish the L — not 'tao'.", "สองพยางค์ ออกเสียง L ท้าย ไม่ใช่ 'ทาว'"],
  passport: ["PASS-port", "Stress the first beat. Ends -RT, both sounds.", "เน้นพยางค์แรก ท้ายออก -RT ให้ครบ"],
  passports: ["PASS-ports", "Ends -RTS. Say all of it, slowly if you must.", "ท้ายออก -RTS ให้ครบ ช้าได้แต่ต้องครบ"],
  minibar: ["MIN-ee-bar", "Stress the first beat. Finish the -R.", "เน้นพยางค์แรก ออกเสียง R ท้าย"],
  currency: ["KUR-un-see", "Stress the first beat. It is an R.", "เน้นพยางค์แรก เป็นเสียง R"],
  guarantee: ["ga-run-TEE", "Stress the LAST beat.", "เน้นพยางค์สุดท้าย"],
  availability: ["uh-vay-luh-BIL-uh-tee", "Five beats, stress the fourth (BIL). V not W.", "ห้าพยางค์ เน้นพยางค์ที่สี่ (BIL) ใช้เสียง V"],
  reconfirm: ["ree-kun-FURM", "Stress the last beat. Ends -RM.", "เน้นพยางค์สุดท้าย ท้ายออก -RM"],
  inconvenience: ["in-kun-VEEN-yuns", "Stress the third beat (VEEN).", "เน้นพยางค์ที่สาม (VEEN)"],
  apologize: ["uh-POL-uh-jize", "Stress the second beat. Ends in a Z sound.", "เน้นพยางค์ที่สอง ท้ายคำเป็นเสียง Z"],
  pleasure: ["PLEZH-er", "Soft ZH in the middle, R at the end.", "กลางคำเป็นเสียง ZH เบา ๆ ท้ายออก R"],
  luggage: ["LUG-ij", "Two beats. Ends -ij, not -age.", "สองพยางค์ ท้ายออกเสียง -ij ไม่ใช่ -age"],
  refrigerant: ["ree-FRIJ-er-unt", "Stress the second beat (FRIJ).", "เน้นพยางค์ที่สอง (FRIJ)"]
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

/* Which {{tokens}} a role's lesson text references (cached per role). We scan
   the units only — $comments (which build.js strips anyway) never count. */
const _roleTokens = {};
const roleTokens = roleId => {
  if (_roleTokens[roleId]) return _roleTokens[roleId];
  const role = C.roles[roleId];
  const out = new Set();
  if (role && role.units) {
    const s = JSON.stringify(role.units);
    const re = /\{\{([^}]+)\}\}/g;
    let m;
    while (m = re.exec(s)) out.add(m[1].trim());
  }
  return _roleTokens[roleId] = [...out];
};

/* A single property fact is ready when it exists and isn't a FILL ME placeholder. */
const factReady = (propertyId, token) => {
  const facts = C.properties[propertyId] && C.properties[propertyId].vars || {};
  if (!(token in facts)) return false;
  const v = facts[token];
  const s = typeof v === "object" && v ? [v.en, v.th].join(" ") : String(v);
  return !/FILL ME/i.test(s);
};

/* A role is playable at a property once it has lessons AND every token those
   lessons use is a real fact for that property. Per-role, not per-property: a
   token-light role (Resort Host) can go live at The Little Shore while an
   outlet-heavy role there still waits for its facts to be filled in. */
const roleAvailableAt = (propertyId, roleId) => {
  const role = C.roles[roleId];
  if (!role || !role.units || !role.units.length) return false;
  return roleTokens(roleId).every(t => factReady(propertyId, t));
};
const assignmentsOf = propertyId => {
  const p = (C.catalogue.properties || []).find(x => x.id === propertyId);
  return p && p.assignments || [];
};
const propertyAvailable = propertyId => assignmentsOf(propertyId).some(a => roleAvailableAt(propertyId, a.role));
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
    if (roleAvailableAt(propertyId, a.role)) row.available = true;
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
  available: roleAvailableAt(propertyId, a.role)
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