const checkPermission = (permissions: string[]): boolean => {
  const userPermissions: string[] = [
    'view_main_page',
    'view_about_page2',
    'view_about_page',
    'view_services_page'
  ];
  return permissions.some(p => userPermissions.includes(p));
};
export default checkPermission;
