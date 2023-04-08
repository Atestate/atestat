#include <iostream>

using namespace std;



int main()
{
    int a[100][100], n;
    cin >> n;
    for (int i = 0; i < n;i++)
        for (int j = 0; j < n;j++)
            cin >> a[i][j];
    int maxi = 1, ok = 1;
    while(ok)
    {
        for (int i = 0; i <= maxi;i++)
        {
            if(a[i][maxi] != a[0][0])
                ok = 0;
            if(a[maxi][i] != a[0][0])
                ok = 0;
        }
        if(ok)
            maxi++;
        if(maxi == n)
            ok = false;
    }
    cout << maxi;
}