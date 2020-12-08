<?php

class template
{

    protected $_ci;

    function __construct()
    {
        $this->_ci = &get_instance();
    }

    function user($template, $data = null)
    {
        $data['_content'] = $this->_ci->load->view($template, $data, true);
        $data['_sidebar'] = $this->_ci->load->view('Template/Sidebar_u', $data, true);
        $data['_head'] = $this->_ci->load->view('Template/Head_u', $data, true);
        $data['_navbar'] = $this->_ci->load->view('Template/Navbar_u', $data, true);
        $data['_footer'] = $this->_ci->load->view('Template/Footer_u', $data, true);
        $this->_ci->load->view('Template/Body.php', $data);
    }

    function admin($template, $data = null)
    {
        $data['_content'] = $this->_ci->load->view($template, $data, true);
        $data['_head'] = $this->_ci->load->view('Template/Head_a', $data, true);
        $data['_sidebar'] = $this->_ci->load->view('Template/Sidebar_a', $data, true);
        $data['_navbar'] = $this->_ci->load->view('Template/Navbar_a', $data, true);
        $data['_footer'] = $this->_ci->load->view('Template/Footer_a', $data, true);
        $this->_ci->load->view('Template/Body_admin.php', $data);
    }

    // template halaman depan
    function guest($template, $data = null)
    {
        $data['_content'] = $this->_ci->load->view($template, $data, true);
        $data['_head'] = $this->_ci->load->view('Template/depan_head', $data, true);
        $data['_menu'] = $this->_ci->load->view('Template/depan_menu', $data, true);
        $data['_footer'] = $this->_ci->load->view('Template/depan_footer', $data, true);
        $this->_ci->load->view('Template/Front-end.php', $data);
    }
}
