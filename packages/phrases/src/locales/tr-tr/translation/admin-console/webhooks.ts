const webhooks = {
  page_title: 'Webhooklar',
  title: 'Webhooklar',
  subtitle:
    'Webhooklar, belirli olaylar için uç nokta URL’nize gerçek zamanlı güncellemeler sağlayarak anında tepkileri mümkün kılan POST istekleri gönderir.',
  create: 'Webhook Oluştur',
  events: {
    post_register: 'Yeni hesap oluştur',
    post_sign_in: 'Oturum açın',
    post_reset_password: 'Parolayı sıfırla',
  },
  table: {
    name: 'Adı',
    events: 'Olaylar',
    success_rate: 'Başarı Oranı (24s)',
    requests: 'İstekler (24s)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Webhooklar, gerçekleşen belirli olaylar hakkında anında güncellemeler sağlayarak POST isteği gönderir. Bu, yeni bilgiye dayalı anında eylemler almanızı sağlar. "Hesap oluşturma, Oturum açma, Parola sıfırlama" olayları artık desteklenmektedir.',
    create_webhook: 'Webhook Oluştur',
  },
  create_form: {
    title: 'Webhook Oluştur',
    subtitle:
      'Webhook ekleyerek, Logto’nun kullanıcı eylemlerinin ayrıntılarını POST isteğiyle uç nokta URL’nize göndermesini sağlayabilirsiniz.',
    events: 'Olaylar',
    events_description: 'Logto’nun POST isteğini göndermesi için tetikleyici olayları seçin.',
    name: 'Adı',
    name_placeholder: 'Webhook adını girin',
    endpoint_url: 'Uç Nokta URL’si',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      "Bir webhooks yükünün gerçekleştiği zaman gönderilen POST isteğinin HTTPS URL'ini girin.",
    create_webhook: 'Webhook Oluştur',
    missing_event_error: 'En az bir olay seçmeniz gerekiyor.',
    https_format_error: 'Güvenliği nedeniyle HTTPS biçimi gereklidir.',
    block_description:
      'Geçerli sürüm üç adede kadar webhooks destekler. Ek webhooks gerekiyorsa, lütfen <a>{{link}}</a> e-posta ile destek ekibimize başvurun, yardımcı olmaktan memnuniyet duyarız.',
  },
  webhook_created: 'Webhook {{name}} başarıyla oluşturuldu.',
};

export default webhooks;
