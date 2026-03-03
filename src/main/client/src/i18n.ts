export interface WebComponentTranslations {
  [key: string]: WebComponentTranslationEntry;
}
export interface WebComponentTranslationEntry {
  [language: string]: string;
}

export const i18n: WebComponentTranslations = {
  'errors.1000': {
    en: 'Could not load Item history',
    th: 'ไม่สามารถโหลดข้อมูลดังกล่าวได้',
    zh: '無法載入項目紀錄',
    ko: '주문내역을 찾을 수 없습니다.',
    ja: '商品履歴を読み込めませんでした',
    id: 'Tidak dapat memuat Riwayat item',
    es: 'No se pudo cargar el historial de ítems',
    pt: 'Não foi possível carregar o histórico de itens',
  },
};
