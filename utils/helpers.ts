
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
};

export const triggerCashDrawer = () => {
  const drawerContainer = document.getElementById('cash-drawer-print-container');
  if (drawerContainer) {
    // Un seul espace insécable suffit pour déclencher le travail d'impression et ouvrir le tiroir.
    // Le CSS d'impression associé garantit que seul ce div est visible et prend un minimum de place.
    drawerContainer.innerHTML = '<p style="margin:0; padding:0; font-size:1px;">&nbsp;</p>';
    window.print();
    // Effacer le contenu après le déclenchement de la boîte de dialogue d'impression pour éviter d'interférer avec les impressions de reçus.
    setTimeout(() => {
        if(drawerContainer) drawerContainer.innerHTML = '';
    }, 500);
  }
};
