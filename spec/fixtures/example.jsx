export default class Test {
  render() {
    return (
      <span>
        <a className="accept-decline-signup" href='javascript:void(0)'>
          <i className="fa fa-user-plus fa-fw"></i>
          {__('Decline')}
          {__('Hello %{name}', { name: 'Jhon' })}
          {__('Hey %{first_name}', {first_name:'Jhon'})}
        </a>
      </span>
    );
  }
}
