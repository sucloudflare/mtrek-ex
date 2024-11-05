namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserData(Request $request)
    {
        $user = $request->user();
        $coupons = [
            ["code" => "CUPOM10", "description" => "10% de desconto", "img" => "parceiro1.png"],
            ["code" => "FRETEGRATIS", "description" => "Frete grátis nas compras acima de R$100", "img" => "parceiro2.png"]
        ];

        return response()->json([
            'name' => $user->name,
            'avatar' => $user->avatar,
            'cashback_balance' => $user->cashback_balance,
            'coupons' => $coupons
        ]);
    }
}
