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
    }
  }
};

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
  privacy: ["PRIV-uh-see", "Stress the first beat.", "เน้นพยางค์แรก"]
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
const MODULES = buildCurriculum(typeof CONTENT !== "undefined" ? CONTENT : null, "sands", "fb-restaurant-service");

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
  unlocked: false,
  ready: false
};
const pickVoice = () => {
  if (!SPEECH.engine) return;
  const vs = SPEECH.engine.getVoices() || [];
  if (!vs.length) return;
  SPEECH.voice = vs.find(v => /en[-_]GB/i.test(v.lang)) || vs.find(v => /en[-_]US/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || vs[0];
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
const say = (text, slow) => {
  const s = SPEECH.engine;
  if (!s || !text) return false;
  try {
    unlockSpeech();
    s.cancel();
    s.resume(); // Chrome sometimes parks the queue
    const clean = text.replace(/\[.*?\]/g, "").replace(/[—–]/g, ",").replace(/[“”‘’]/g, "").trim();
    const u = new SpeechSynthesisUtterance(clean);
    if (SPEECH.voice) u.voice = SPEECH.voice;
    u.lang = SPEECH.voice ? SPEECH.voice.lang : "en-GB";
    u.rate = slow ? 0.55 : 0.92;
    u.volume = 1;
    u.pitch = 1;
    s.speak(u);
    return true;
  } catch (e) {
    return false;
  }
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
  const [view, setView] = useState("home");
  const [activeId, setActiveId] = useState(null);
  const [progress, setProgress] = useState({});
  const [xp, setXp] = useState(0);
  const [thaiOn, setThaiOn] = useState(true);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("sands_fb_english_v2");
        if (r && r.value) {
          const d = JSON.parse(r.value);
          setProgress(d.progress || {});
          setXp(d.xp || 0);
          if (typeof d.thaiOn === "boolean") setThaiOn(d.thaiOn);
        }
      } catch (e) {
        /* first run */
      }
      setLoaded(true);
    })();
  }, []);
  const persist = async (p, x, t) => {
    try {
      await window.storage.set("sands_fb_english_v2", JSON.stringify({
        progress: p,
        xp: x,
        thaiOn: t
      }));
    } catch (e) {
      /* in-memory only */
    }
  };
  const finish = (modId, earned, max) => {
    const pct = Math.round(earned / max * 100);
    const p = {
      ...progress,
      [modId]: {
        pct: Math.max(pct, progress[modId]?.pct || 0)
      }
    };
    const x = xp + earned;
    setProgress(p);
    setXp(x);
    persist(p, x, thaiOn);
  };
  const toggleThai = () => {
    const t = !thaiOn;
    setThaiOn(t);
    persist(progress, xp, t);
  };
  const active = MODULES.find(m => m.id === activeId);
  return /*#__PURE__*/React.createElement("div", {
    className: "se-root"
  }, /*#__PURE__*/React.createElement("style", null, STYLES), /*#__PURE__*/React.createElement("div", {
    className: "se-phone"
  }, view === "home" && loaded && /*#__PURE__*/React.createElement(Home, {
    progress: progress,
    xp: xp,
    thaiOn: thaiOn,
    toggleThai: toggleThai,
    onPick: id => {
      setActiveId(id);
      setView("lesson");
    }
  }), view === "lesson" && active && /*#__PURE__*/React.createElement(Lesson, {
    key: active.id,
    module: active,
    thaiOn: thaiOn,
    onQuit: () => setView("home"),
    onDone: (e, m) => finish(active.id, e, m),
    onHome: () => setView("home")
  })));
}

/* ---------------- HOME ---------------- */

function Home({
  progress,
  xp,
  thaiOn,
  toggleThai,
  onPick
}) {
  const totalQ = MODULES.reduce((n, m) => n + m.questions.length, 0);
  const [sound, setSound] = useState(null); // null | "ok" | "none"

  const testSound = () => {
    if (!speechAvailable()) {
      setSound("none");
      return;
    }
    const spoke = say("Good evening. Welcome to The Sands.");
    setSound(spoke ? "ok" : "none");
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "hd"
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
  }, "The Sands \xB7 Food & Beverage"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
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
  }, "You should have heard \u201CGood evening. Welcome to The Sands.\u201D If not, check the side switch on your phone and turn the volume up \u2014 the silent switch mutes speech.", /*#__PURE__*/React.createElement("span", {
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
  }, MODULES.map((m, i) => {
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