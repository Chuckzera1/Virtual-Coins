export function removeAccents(letter: string) {
    return letter
      .toLowerCase()
      .replace(/á/g, 'a')
      .replace(/ã/g, 'a')
      .replace(/â/g, 'a')
      .replace(/à/g, 'a')
      .replace(/é/g, 'e')
      .replace(/ê/g, 'e')
      .replace(/è/g, 'e')
      .replace(/í/g, 'i')
      .replace(/î/g, 'i')
      .replace(/ì/g, 'i')
      .replace(/ó/g, 'o')
      .replace(/ô/g, 'o')
      .replace(/õ/g, 'o')
      .replace(/ò/g, 'o')
      .replace(/ú/g, 'u')
      .replace(/û/g, 'u')
      .replace(/ù/g, 'u')
      .replace(/ç/g, 'c');
  }