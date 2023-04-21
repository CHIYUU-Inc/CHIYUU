+++
title = "実績"
+++

{{< rawhtml >}}
<div class="experiences">
  <table class="table table-bordered text-center">
    <thead>
      <tr>
        <th class="text-center">No</th>
        <th class="text-center">期間</th>
        <th class="text-center work">業務内容</th>
        <th class="text-center">技術スタック</th>
        <th class="text-center link">リンク</th>
      </tr>
    </thead>
    <tbody id="js-tbody"></tbody>
  </table>
</div>

<script>
var data = [
  {
    no: 16,
    term: '2022/4/1~現在',
    work: {
      title: '葬儀社相見積もりサービス開発',
      body: ['']
    },
    tech: '',
    link: ''
  },
  {
    no: 15,
    term: '2021/6/1~2022/2/28',
    work: {
      title: 'ケアマネージャー用SNSのリニューアル開発',
      body: [
        'web.devを参考にCWV改善',
        '要件をもとに詳細設計&実装&テスト作成',
      ]
    },
    tech: 'HTML5/CSS3, JavaScript, Ruby, Ruby on Rails, Vue.js, Nuxt.js, TypeScript, Jest, GitHub Actions, AWS, Docker, PostgreSQL',
    link: ''
  },
  {
    no: 14,
    term: '2021/1/4~現在',
    work: {
      title: '高齢者向け宅配弁当の検索・資料請求サービスのリニューアル開発',
      body: ['']
    },
    tech: '',
    link: ''
  },
  {
    no: 13,
    term: '2020/5/1~2020/9/30',
    work: {
      title: 'SaaS型勤怠管理システム開発',
      body: [
        '要件より詳細設計を作成&開発からAPI設計書作成、テストコード作成を行う',
        'バックエンド側全ての開発を担当'
      ]
    },
    tech: 'HTML5/CSS3, JavaScript, Ruby, Ruby on Rails,	MySQL, Amazon, Linux, Docker, AWS, Swagger',
    link: ''
  },
  {
    no: 12,
    term: '2020/2/1~2020/9/30',
    work: {
      title: 'Bitcoin価格ベットスマホアプリ開発',
      body: [
        'Flutter及びFirestoreの技術調査&実装',
        'CEOと直接やり取りし用件から詳細設計&実装&リリースまで行う',
        'LPコーディング',
        '管理画面開発(Angular)',
        'バッチスクリプト作成(Golang)',
        '管理画面及びバッチ処理サーバーの保守'
      ]
    },
    tech: 'HTML5/CSS3, JavaScript, Golang, Ruby, TypeScript Dart, Ruby on Rails, Flutter, Angular, Firestore Firebase, Amazon Linux, Docker, AWS, ECS, GCF',
    link: ''
  },
  {
    no: 11,
    term: '2019/5/1~2019/7/31',
    work: {
      title: 'インバスケット研修システム機能改修',
      body: [
        'お客様より用件をヒアリング',
        '用件より簡易デザインを作成し詳細設計&実装&テスト&デプロイまで行う'
      ]
    },
    tech: 'HTML5/CSS3, JavaScript, Ruby, Ruby on Rails, MySQL, Ubuntu, Docker, AWS',
    link: ''
  },
  {
    no: 10,
    term: '2018/9/1~2018/11/30',
    work: {
      title: 'スマホアプリ配布管理プラットフォーム開発',
      body: [
        'デザインからAPIのエンドポイント&実装詳細設計',
        'テストケース作成&テスト実施'
      ]
    },
    tech: 'Golang	DynamoDB, Amazon Linux, Docker, Swagger UI, AWS Lambda',
    link: ''
  },
  {
    no: 9,
    term: '2018/8/1~2022/8/31',
    work: {
      title: '広告出稿時データのスプレッドシート自動同期システム開発',
      body: [
        '機能要件からのシステム要件定義',
        '技術選定',
        'システムを1から構成しリリースまで'
      ]
    },
    tech: 'Ruby, Ruby on Rails, MySQL, Ubuntu, Docker, Google Sheets API',
    link: ''
  },
  {
    no: 8,
    term: '2018/5/1~2018/7/31',
    work: {
      title: '大規模新卒研修のインストラクター担当',
      body: [
        '非エンジニアの新卒向けに教材を使用したエンジニア研修のサポートコーチ',
        '教材ではカバー出来ない分野の教材をスライドで作成し、全新卒(255名ほど)の前で講習を行う'
      ]
    },
    tech: 'HTML5/CSS3, PHP, Laravel, JavaScript, MySQL, CentOS, VirtualBox, Vagrant',
    link: ''
  },
  {
    no: 7,
    term: '2018/2/1~2018/3/31',
    work: {
      title: 'インバスケット研修システム開発',
      body: [
        'デザインより機能を洗い出しAPIの詳細設計&実装&テストを行う',
        'デザインよりフロントエンドの詳細設計&実装&テストを行う'
      ]
    },
    tech: 'HTML5/CSS3, JavaScript, Ruby, Ruby on Rails, MySQL, Ubuntu, Docker, AWS',
    link: ''
  },
  {
    no: 6,
    term: '2017/9/1~2018/4/30',
    work: {
      title: 'プログラミング学習塾のインストラクター担当',
      body: [
        'Web開発科目のインストラクターとしてプログラミングを教授',
        '課題、独自カリキュラムの作成'
      ]
    },
    tech: 'HTML5/CSS3, Ruby, JavaScript, Ruby on Rails,	MySQL, CentOS, VirtualBox',
    link: ''
  },
  {
    no: 5,
    term: '2017/8/1~2017/9/30',
    work: {
      title: '中小企業・ベンチャー向けクラウドERPシステム改修',
      body: ['クラウドERPシステムの機能改修を実施。主にAngularJSからAngular2への移行部分を担当']
    },
    tech: 'HTML5, CSS3, JavaScript, Ruby, TypeScript, AngularJS, Angular2, Ruby on Rails, MySQL, Ubuntu',
    link: ''
  },
  {
    no: 4,
    term: '2017/6/1~2017/7/31',
    work: {
      title: 'シャッフルランチシステム開発',
      body: ['システムを1から一人で作成。要件定義、デザイン、詳細設計、実装、テスト、インフラ構築まで一通り行う']
    },
    tech: 'HTML5, CSS3, JavaScript, Ruby, jQuery, Ruby on Rails, MySQL, CentOS, Nginx, さくらのVPS',
    link: ''
  },
  {
    no: 3,
    term: '2017/4/1~2017/7/31',
    work: {
      title: '会社広報用サイト作成',
      body: ['WordPressとさくらのVPSを用いて会社広報用サイトを作成、運用']
    },
    tech: 'HTML5, CSS3, JavaScript, PHP, WordPress, jQuery, MySQL, さくらのVPS',
    link: ''
  },
  {
    no: 2,
    term: '2017/2/1~2017/3/31',
    work: {
      title: 'スポーツ運営クラブ向けCMSサービス開発',
      body: [
        'スポーツ運営クラブ向けCMSサービス改修を実施。CMSはオープンソースのSHIRASAGIを使用',
        'デザインより機能を洗い出しAPIの詳細設計&実装&テストを行う',
        'デザインよりフロントエンドの詳細設計&実装&テストを行う'
      ]
    },
    tech: 'HTML5, CSS3, JavaScript, Ruby, PHP, jQuery, AngularJS, Ruby on Rails, Laravel, MySQL, Ubuntu, AWS, Docker',
    link: ''
  },
  {
    no: 1,
    term: '2017/1/5~2017/2/28',
    work: {
      title: 'MDMシステム開発',
      body: [
        'BtoB向けアプリのサーバーサイドのシステム改修作業を実施',
        'セキュリティインシデントの改修作業がメイン'
      ]
    },
    tech: 'HTML5, CSS3, JavaScript, Ruby, jQuery, Ruby on Rails, MySQL, Ubuntu, Docker',
    link: ''
  }
];

document.addEventListener("DOMContentLoaded", function() {
  var tbody = document.getElementById('js-tbody');
  data.forEach(function(item) {
    tbody.insertAdjacentHTML('beforeend', createRowHTML(item));
  });
});

function createRowHTML(item) {
  var no = item.no;
  var term = item.term;
  var workTitle = item.work.title;
  var workBody = item.work.body.map(function(str) { return '- ' + str; }).join('\n');
  var tech = item.tech;
  var link = item.link;
  var linkHTML = link ? '<a href="' + link + '">詳細</a>' : '-';

  return (
    '<tr>' +
      '<td class="js-no">' + no + '</td>' +
      '<td class="js-term">' + term + '</td>' +
      '<td class="js-work text-left">' + '<span class="work-title">' + workTitle + '</span>' + workBody  + '</td>' +
      '<td class="js-tech">' + tech + '</td>' +
      '<td class="js-link">' + linkHTML + '</td>' +
    '</tr>'
  );
}
</script>
{{< /rawhtml >}}
