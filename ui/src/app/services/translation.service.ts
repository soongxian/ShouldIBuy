import { Injectable } from '@angular/core';

export interface TranslationStrings {
  headerTitle: string;
  quality: string;
  usefulness: string;
  affordability: string;
  availability: string;
  urgency: string;
  longTerm: string;
  regret: string;
  evaluationButton: string;
  [key: string]: string;
}

export interface Translations {
  [key: string]: TranslationStrings;
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {

  private currentLang = 'en';

  private translations: Translations = {
    en: {
      headerTitle: 'Should I Buy?',
      quality: 'Quality of Item (will it break faster than my patience?)',
      usefulness: 'Usefulness of Item (or will it just collect dust?)',
      affordability: 'Affordability (will my wallet cry for weeks?)',
      availability:
        'Availability of Alternatives (could I just buy a knockoff?)',
      urgency: 'Urgency (if I wait, will the universe collapse?)',
      longTerm: 'Long-Term Value (will future-me thank or slap me?)',
      regret: 'Post-Purchase Regret Risk (will I stare at it and sigh later?)',
      evaluationButton: 'Time for Evaluation!',

      // Quality
      quality5: 'Impenetrable Fortress',
      quality4: 'Quite Durable',
      quality3: 'Works... Mostly',
      quality2: 'Held Together by Hope',
      quality1: 'Falls Apart on Contact',

      // Usefulness
      usefulness5: 'Life-Changing',
      usefulness4: 'Saves Your Day',
      usefulness3: 'Occasionally Handy',
      usefulness2: 'Rarely Used',
      usefulness1: 'Paperweight',

      // Affordability
      affordable5: 'Practically Free',
      affordable4: 'Reasonably Priced',
      affordable3: 'Wallet Bruised',
      affordable2: 'Goodbye Savings',
      affordable1: 'Financial Crisis',

      // Availability
      availability5: 'One of a Kind',
      availability4: 'Rare Find',
      availability3: 'Plenty Around',
      availability2: 'Basically Everywhere',
      availability1: 'Your Mum Has One',

      // Urgency
      urgency5: 'Need It Yesterday',
      urgency4: 'High Priority',
      urgency3: "Whenever's Fine",
      urgency2: 'Maybe Someday',
      urgency1: 'Next Life',

      // Long Term
      longTerm5: 'Family Heirloom',
      longTerm4: 'Worth Keeping',
      longTerm3: 'Useful Sometimes',
      longTerm2: 'Weekend Romance',
      longTerm1: 'Disposable Disappointment',

      // Regret
      regret5: 'Brag-Worthy',
      regret4: 'Mostly Fine',
      regret3: 'Having Second Thought',
      regret2: 'What Have I Done',
      regret1: 'Crying in the Shower',

      // Result
      strongBuy:
        'STRONG BUY (Buy it, mortal! Future-you will build a shrine in your honor.)',
      consider: 'CONSIDER IT (Tempting… but will it be love or just a fling?)',
      thinkTwice:
        'THINK TWICE (Are you buying a tool… or just a future regret machine?)',
      risky:
        'RISKY (Put down the credit card. This is how storage wars begin.)',
      okUnderstood: 'OK, UNDERSTOOD',
    },

    ch: {
      headerTitle: '真的需要这货？',
      quality: '物品质量（会不会用两天就坏？）',
      usefulness: '实用性（买了会不会放在角落吃灰？）',
      affordability: '是否买得起（钱包要不要先哭一场？）',
      availability: '替代品的可获得性（是不是随便都有得买？）',
      urgency: '紧迫性（不买会不会天塌下来？）',
      longTerm: '长期价值（五年后还会感谢自己吗？）',
      regret: '购买后后悔风险（买了会不会想退货？）',
      evaluationButton: '来点消费哲学吧！',

      // Quality
      quality5: '坚不可摧的堡垒',
      quality4: '相当耐用',
      quality3: '大多数时候能用',
      quality2: '靠希望支撑',
      quality1: '一碰就散',

      // Usefulness
      usefulness5: '改变人生',
      usefulness4: '拯救你的一天',
      usefulness3: '偶尔有用',
      usefulness2: '很少使用',
      usefulness1: '镇纸',

      // Affordability
      affordable5: '几乎免费',
      affordable4: '价格合理',
      affordable3: '钱包受伤',
      affordable2: '和存款说再见',
      affordable1: '财政危机',

      // Availability
      availability5: '独一无二',
      availability4: '稀有发现',
      availability3: '到处都有',
      availability2: '几乎随处可见',
      availability1: '你妈都有一件',

      // Urgency
      urgency5: '昨天就需要',
      urgency4: '高优先级',
      urgency3: '什么时候都行',
      urgency2: '也许有一天',
      urgency1: '下辈子吧',

      // Long Term
      longTerm5: '家传宝物',
      longTerm4: '值得保留',
      longTerm3: '偶尔有用',
      longTerm2: '周末恋情',
      longTerm1: '一次性失望',

      // Regret
      regret5: '值得炫耀',
      regret4: '基本还行',
      regret3: '开始后悔了',
      regret2: '我做了什么',
      regret1: '在浴室里哭',

      // Result
      strongBuy: '强烈推荐购买（快买吧，凡人！未来的你会为此立碑感谢自己。）',
      consider: '可以考虑（看起来很诱人…但会是真爱还是一场玩玩就好？）',
      thinkTwice: '三思而后行（你是在买工具，还是在投资后悔？）',
      risky: '风险很大（放下信用卡！这样下去你家仓库要开拍卖会了。）',
      okUnderstood: '好的，我明白了',
    },
    my: {
      headerTitle: 'Betul Perlu Beli?',
      quality: 'Kualiti Barang (esok dah rosak ke?)',
      usefulness: 'Kegunaan Barang (guna sekali, lepas tu simpan stor?)',
      affordability: 'Kemampuan Membeli (akaun bank boleh tahan ke?)',
      availability: 'Ketersediaan Alternatif (kedai sebelah pun ada jual?)',
      urgency: 'Keperluan Segera (tak beli sekarang terus kiamat?)',
      longTerm: 'Nilai Jangka Panjang (3 tahun lagi masih berguna ke?)',
      regret: 'Risiko Menyesal Selepas Beli (menyesal tak sudah ke?)',
      evaluationButton: 'Mari Buat Kira-Kira!',

      // Quality
      quality5: 'Kubu Kebal',
      quality4: 'Agak Tahan Lama',
      quality3: 'Kadang Berfungsi',
      quality2: 'Dipegang Harapan',
      quality1: 'Sentuh Terus Rosak',

      // Usefulness
      usefulness5: 'Ubah Hidup',
      usefulness4: 'Selamatkan Harimu',
      usefulness3: 'Kadang-kadang Berguna',
      usefulness2: 'Jarang Digunakan',
      usefulness1: 'Penekan Kertas',

      // Affordability
      affordable5: 'Hampir Percuma',
      affordable4: 'Harga Berpatutan',
      affordable3: 'Dompet Lebam',
      affordable2: 'Selamat Tinggal Simpanan',
      affordable1: 'Krisis Kewangan',

      // Availability
      availability5: 'Satu-satunya',
      availability4: 'Sukar Dijumpai',
      availability3: 'Banyak Sekeliling',
      availability2: 'Ada Di Mana-mana',
      availability1: 'Mak Kau Pun Ada',

      // Urgency
      urgency5: 'Perlu Semalam',
      urgency4: 'Keutamaan Tinggi',
      urgency3: 'Bila-bila Pun Ok',
      urgency2: 'Mungkin Suatu Hari',
      urgency1: 'Hidup Akan Datang',

      // Long Term
      longTerm5: 'Pusaka Keluarga',
      longTerm4: 'Berbaloi Simpan',
      longTerm3: 'Kadang-kadang Berguna',
      longTerm2: 'Cinta Hujung Minggu',
      longTerm1: 'Kekecewaan Pakai Buang',

      // Regret
      regret5: 'Layak Dibanggakan',
      regret4: 'Boleh Tahan',
      regret3: 'Mula Ragu-ragu',
      regret2: 'Apa Aku Dah Buat',
      regret1: 'Menangis Dalam Bilik Mandi',

      //Result
      strongBuy:
        'WAJIB BELI (Beli lah wahai insan! Nanti diri masa depan akan buat tugu untuk anda.)',
      consider:
        'BOLEH PERTIMBANGKAN (Nampak menggoda… tapi cinta sejati atau sekadar main-main?)',
      thinkTwice:
        'FIKIR DUA KALI (Adakah ini alat berguna… atau mesin penyesalan masa depan?)',
      risky:
        'RISIKO TINGGI (Letak kad kredit tu! Ini jalan menuju stor penuh barang tak guna.)',
      okUnderstood: 'OK, FAHAM',
    },
  };

  getResultDescription(category: string, score: number): string {
    const descriptions: Record<string, Record<string, string[]>> = {
      quality: {
        en: [
          'The item is of very poor quality and fails to meet basic standards. Think carefully if it is worth the risk.',
          'The item shows below average quality with noticeable flaws. Ask yourself if you can accept the compromises.',
          "The item is acceptable but unremarkable. Reflect on whether 'good enough' really is good enough.",
          'The item demonstrates good quality and appears reliable. Still, consider if you truly need this level of quality.',
          'The item is excellent in quality and exceeds expectations. Yet, ask if premium quality is truly necessary.',
        ],
        ch: [
          '这个物品质量很差，连基本标准都达不到。请认真想想是否值得冒这个风险。',
          '这个物品质量偏低，有明显缺陷。问问自己能否接受这些妥协。',
          '这个物品质量一般，可以用但没有亮点。思考一下“够用”是否真的够用。',
          '这个物品质量良好，看起来可靠。但请考虑你是否真的需要这种水平的质量。',
          '这个物品质量极佳，超出预期。不过请想一想，高质量是否真的必要。',
        ],
        my: [
          'Barang ini sangat rendah kualiti dan tidak memenuhi piawaian asas. Pertimbangkan sama ada berbaloi mengambil risiko.',
          'Barang ini berkualiti rendah dengan kelemahan yang jelas. Tanya diri anda jika sanggup menerima kompromi.',
          'Barang ini boleh diterima tetapi tidak istimewa. Renungkan sama ada “cukup baik” benar-benar cukup.',
          'Barang ini berkualiti baik dan kelihatan boleh dipercayai. Namun, fikirkan sama ada anda benar-benar memerlukannya.',
          'Barang ini berkualiti tinggi dan melebihi jangkaan. Tetapi, adakah kualiti premium ini benar-benar perlu?',
        ],
      },
      usefulness: {
        en: [
          'This item offers little to no practical use. Be honest — do you really need it?',
          'This item has limited usefulness in rare situations. Consider how often you will actually use it.',
          'This item is moderately useful. Ask yourself if occasional convenience is worth the price.',
          'This item is highly useful for daily activities. But weigh if the cost matches the benefit.',
          'This item is extremely useful and almost indispensable. Even so, think if it fits your long-term needs.',
        ],
        ch: [
          '这个物品几乎没有实际用途。说实话，你真的需要它吗？',
          '这个物品用途有限，只在少数情况下有用。想想你会多常用到它。',
          '这个物品有一定实用性。问问自己偶尔的方便是否值得花钱。',
          '这个物品很实用，能支持日常活动。但要权衡成本是否值得。',
          '这个物品非常实用，几乎不可或缺。但也要想想是否符合你的长期需求。',
        ],
        my: [
          'Barang ini hampir tiada kegunaan praktikal. Jujurlah — adakah anda benar-benar perlu?',
          'Barang ini hanya berguna dalam situasi tertentu. Fikirkan sejauh mana anda akan menggunakannya.',
          'Barang ini agak berguna. Tanya diri anda jika kemudahan sekali-sekala berbaloi.',
          'Barang ini sangat berguna untuk aktiviti harian. Tetapi timbangkan sama ada kos sepadan dengan manfaat.',
          'Barang ini amat berguna dan hampir tidak boleh diganti. Namun fikirkan sama ada ia sesuai dengan keperluan jangka panjang anda.',
        ],
      },
      affordability: {
        en: [
          'This item is far beyond your budget. Buying it may cause financial strain.',
          'This item is somewhat unaffordable. Think if it is worth stretching your wallet.',
          'This item is reasonably priced but still a noticeable cost. Consider if it fits your budget.',
          'This item is affordable and within reach. Still, check if it’s the best use of your money.',
          'This item is highly affordable. But remember — cheap doesn’t always mean necessary.',
        ],
        ch: [
          '这个物品远超出你的预算。购买它可能会造成经济压力。',
          '这个物品价格偏高。想想是否值得为它掏空钱包。',
          '这个物品价格合理，但仍是一笔不小的开销。考虑是否合乎预算。',
          '这个物品价格适中，你买得起。但请确认这是否是你资金的最佳用途。',
          '这个物品非常便宜。但要记住，便宜并不等于必要。',
        ],
        my: [
          'Barang ini jauh melebihi bajet anda. Membelinya boleh membebankan kewangan.',
          'Barang ini agak mahal. Pertimbangkan sama ada berbaloi untuk mengosongkan dompet.',
          'Barang ini berharga sederhana tetapi masih kos yang ketara. Fikirkan sama ada ia sesuai dengan bajet anda.',
          'Barang ini mampu milik dan dalam jangkauan. Namun, pastikan ia penggunaan wang yang bijak.',
          'Barang ini sangat murah. Tetapi ingat — murah tidak semestinya perlu.',
        ],
      },
      availability: {
        en: [
          'Alternatives are everywhere. Why rush?',
          'There are many alternatives, though some may be less ideal. Consider your options.',
          'Alternatives exist, but not in abundance. Think if you should wait or grab now.',
          'Alternatives are few. If you wait too long, you may lose the chance.',
          'This item is rare. If you need it, hesitation could mean missing out.',
        ],
        ch: [
          '替代品随处可见。为什么要急着买？',
          '替代品很多，但可能不完全理想。考虑一下选择。',
          '有替代品，但不算多。想一想是要等还是要先下手。',
          '替代品很少。如果等太久，可能错过机会。',
          '这个物品非常稀缺。如果你需要，犹豫可能让你失去它。',
        ],
        my: [
          'Alternatif ada di mana-mana. Kenapa perlu tergesa-gesa?',
          'Banyak alternatif, walaupun ada yang kurang sesuai. Fikirkan pilihan anda.',
          'Ada alternatif, tetapi tidak banyak. Pertimbangkan sama ada mahu tunggu atau beli sekarang.',
          'Alternatif sangat sedikit. Jika tunggu lama, peluang mungkin hilang.',
          'Barang ini jarang ditemui. Jika anda perlukan, kelewatan boleh menyebabkan anda terlepas.',
        ],
      },
      urgency: {
        en: [
          'There is no urgency. You can safely wait.',
          'Low urgency. Buying later will likely make no difference.',
          'Some urgency exists. Think if waiting could affect your need.',
          'High urgency. Delaying may inconvenience you.',
          'Extreme urgency. If you don’t buy now, you may regret it.',
        ],
        ch: [
          '完全不紧迫。你可以放心等等。',
          '紧迫性不高。晚点买也没差。',
          '有一点紧迫。想想等下去是否会影响需求。',
          '紧迫性高。拖延可能带来不便。',
          '非常紧迫。如果现在不买，你可能会后悔。',
        ],
        my: [
          'Tidak ada keperluan mendesak. Anda boleh tunggu.',
          'Keperluan rendah. Beli kemudian pun tiada beza.',
          'Ada sedikit keperluan mendesak. Pertimbangkan jika tunggu akan menjejaskan anda.',
          'Keperluan tinggi. Melambatkan mungkin menyusahkan anda.',
          'Keperluan sangat tinggi. Jika tidak beli sekarang, anda mungkin menyesal.',
        ],
      },
      longTerm: {
        en: [
          'This item offers no long-term value. You may regret it soon.',
          'Low long-term value. Think carefully if it is just a short-term thrill.',
          'Moderate long-term value. Consider if it balances short and long-term needs.',
          'Good long-term value. It may serve you well into the future.',
          'Excellent long-term value. A smart investment if you truly need it.',
        ],
        ch: [
          '这个物品没有长期价值。你可能很快会后悔。',
          '长期价值很低。考虑一下这是不是只是短暂的冲动。',
          '长期价值一般。思考一下短期和长期是否平衡。',
          '长期价值良好。它可能在未来长期为你服务。',
          '长期价值极佳。如果你真的需要，这是明智的投资。',
        ],
        my: [
          'Barang ini tiada nilai jangka panjang. Anda mungkin cepat menyesal.',
          'Nilai jangka panjang rendah. Pertimbangkan jika ini hanya keseronokan sementara.',
          'Nilai jangka panjang sederhana. Fikirkan sama ada ia seimbang dengan keperluan anda.',
          'Nilai jangka panjang baik. Ia boleh berkhidmat untuk anda lama.',
          'Nilai jangka panjang sangat baik. Pelaburan bijak jika anda benar-benar perlu.',
        ],
      },
      regret: {
        en: [
          'Very high regret risk. You are almost guaranteed to regret this purchase.',
          'High regret risk. Think twice — is it impulse or need?',
          'Moderate regret risk. Ask yourself if the risk is worth the reward.',
          'Low regret risk. Still, reflect on whether you might feel differently later.',
          'Very low regret risk. You will likely be satisfied — but never forget to double-check.',
        ],
        ch: [
          '后悔风险极高。你几乎肯定会后悔。',
          '后悔风险很高。三思——这是冲动还是需求？',
          '后悔风险一般。问问自己值得不值得冒这个险。',
          '后悔风险较低。但还是要想想未来会不会改变心意。',
          '后悔风险极低。你大概率会满意——但也别忘了再确认。',
        ],
        my: [
          'Risiko menyesal sangat tinggi. Anda hampir pasti akan menyesal.',
          'Risiko menyesal tinggi. Fikir dua kali — adakah ini nafsu atau keperluan?',
          'Risiko menyesal sederhana. Tanya diri anda sama ada berbaloi menanggung risikonya.',
          'Risiko menyesal rendah. Namun, fikirkan jika pandangan anda boleh berubah nanti.',
          'Risiko menyesal sangat rendah. Anda mungkin berpuas hati — tapi sentiasa semak sekali lagi.',
        ],
      },
    };

    return (
      descriptions[category]?.[this.currentLang]?.[score - 1] ??
      'No description available.'
    );
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
  }

  get(key: string): string {
    return this.translations[this.currentLang]?.[key] || key;
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
}
