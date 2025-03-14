import Cookies from 'js-cookie'

export function logout() {
  if (confirm('Realmente deseja sair?') === true) {
    Cookies.remove('Authorization')
    window.location.href = '/'
  }
}
