import React from 'react';

export default class Affix extends React.Component {
  constructor() {
    super();
    this.state = {
      affix: false,
      hide :false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { affix } = this.state;
    const { offset, disappear } = this.props;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true,
        hide: false
      });
    }
    
    if (affix && scrollTop < offset) {
      this.setState({
        // hide: false,
        affix: false,
      });
    }

    if (scrollTop >= disappear){
      this.setState({
        affix: false,
        hide : true
      });
    }
  };

  render() {
    const affix = this.state.affix ? 'affix' : '';
    const hide = this.state.hide ? 'hide' : '';
    const { className, ...props } = this.props;

    return (
      <div {...props} className={`${className || ''} ${affix} ${hide}`}>
        {this.props.children}
      </div>
    );
  }
}