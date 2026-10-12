/**
 * Programmatically triggers the direct file download of Vrushali Pawar's resume.
 */
export const downloadResumeFile = (filename = 'Vrushali_Pawar.pdf'): void => {
  const link = document.createElement('a');
  link.href = '/Vrushali_Pawar.pdf';
  link.download = filename;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
